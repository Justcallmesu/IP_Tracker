// Icons
import Arrow from "../../../../src/Assets/images/icon-arrow.svg";

// React
import { BaseSyntheticEvent, useEffect, useState } from "react";

// Context
import {
	useUpdateDataContext,
	useIsErrorContext,
	useUpdateIsErrorContext,
} from "../../../App";

export function InputField() {
	const [input, setInput] = useState("");

	// State Context
	const isErrorContext = useIsErrorContext();

	// Update Context
	const updateData = useUpdateDataContext();
	const updateError = useUpdateIsErrorContext();

	function handleInputOnChange(e: BaseSyntheticEvent) {
		if (isErrorContext) updateError(false);
		setInput(e.target.value);
	}

	function handleOnFocus() {
		if (input === "Invalid IP Address") {
			setInput("");
			updateError(false);
		}
	}

	function handleButtonSubmit() {
		if (!input) return;
		updateData(input);
		setInput("");
	}

	function getErrorClass() {
		return `w-full pl-5 text-sm lg:text-[18px] ${
			isErrorContext ? `text-red-400 font-bold placeholder:text-red-400` : ""
		}`;
	}

	useEffect(() => {
		if (isErrorContext) setInput("Invalid IP Address");
	}, [isErrorContext]);

	return (
		<div className="w-full flex justify-center">
			<div className="w-full mx-14 lg:mx-0 lg:w-2/6 flex justify-center rounded-xl overflow-hidden">
				<input
					type="text"
					value={input}
					onChange={handleInputOnChange}
					onFocus={handleOnFocus}
					placeholder="Search for any IP address or domain"
					className={getErrorClass()}
				/>
				<button
					className="bg-black p-5 outline-none border-none"
					onClick={handleButtonSubmit}>
					<img
						src={Arrow}
						alt="arrow"
					/>
				</button>
			</div>
		</div>
	);
}
