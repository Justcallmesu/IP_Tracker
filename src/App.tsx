import { createContext, useContext, useEffect, useState } from "react";
import { Axios } from "axios";

// Context Declaration
const GetDataContext = createContext<string>("");
const UpdateDataContext = createContext<Function>(() => {});
const isErrorContext = createContext<boolean>(false);
const updateIsErrorContext = createContext<Function>(() => {});

// Export Context
export function useDataContext() {
	return useContext(GetDataContext);
}

export function useUpdateDataContext() {
	return useContext(UpdateDataContext);
}

export function useIsErrorContext() {
	return useContext(isErrorContext);
}

export function useUpdateIsErrorContext() {
	return useContext(updateIsErrorContext);
}

// Components
import { Hero } from "./components/Layout/Hero";
import { IPData } from "./interface/IPData.interface";

export function App() {
	// Axios
	const axios = new Axios({
		baseURL: "https://geo.ipify.org/api/v2/",
	});

	// State
	const [APIData, setAPIData] = useState({} as IPData);
	const [IPAddress, setIPAddress] = useState("");
	const [isError, setIsError] = useState(false);

	function UpdataData(IP: string) {
		setIPAddress(IP);
	}

	async function FetchAPIData() {
		if (!IPAddress) return;

		const response = await axios.get(
			`country,city?apiKey=${
				import.meta.env.VITE_REACT_APIKEY
			}&ipAddress=${IPAddress}`
		);

		if (response.status == 422) {
			setIsError(true);
			return;
		}

		const data: IPData = JSON.parse(response.data) as IPData;

		setAPIData(data);
	}

	useEffect(() => {
		FetchAPIData();
	}, [IPAddress]);

	return (
		<GetDataContext.Provider value={IPAddress}>
			<UpdateDataContext.Provider value={UpdataData}>
				<div className="h-screen flex flex-col">
					<Hero />
				</div>
			</UpdateDataContext.Provider>
		</GetDataContext.Provider>
	);
}
