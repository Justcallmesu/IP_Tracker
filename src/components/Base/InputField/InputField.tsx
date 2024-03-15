// Icons
import Arrow from "../../../../src/Assets/images/icon-arrow.svg";

// React
import { BaseSyntheticEvent, useState } from "react";

// Context
import { useUpdateDataContext } from "../../../App";

export function InputField() {
	const [input, setInput] = useState("");

	// Update Context
	const updateData = useUpdateDataContext();

	function handleInputOnChange(e: BaseSyntheticEvent) {
		setInput(e.target.value);
	}

	function handleButtonSubmit() {
		if (!input) return;
		updateData(input);
		setInput("");
	}

	return (
		<div className="w-full flex justify-center">
			<div className="w-full mx-14 lg:mx-0 lg:w-2/6 flex justify-center rounded-xl overflow-hidden">
				<input
					type="text"
					value={input}
					onChange={handleInputOnChange}
					placeholder="Search for any IP address or domain"
					className="w-full pl-5 text-sm lg:text-[18px]"
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
