// Icons
import Arrow from "../../../src/Assets/images/icon-arrow.svg";
// React
import { useState } from "react";

export function InputField() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-2/6 flex justify-center rounded-xl overflow-hidden">
				<input
					type="text"
					placeholder="Search for any IP address or domain"
					className="w-full pl-5"
				/>
				<button className="bg-black p-5 outline-none border-none">
					<img
						src={Arrow}
						alt="arrow"
					/>
				</button>
			</div>
		</div>
	);
}
