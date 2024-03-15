import { useMediaQuery } from "react-responsive";

// Resource
import DesktopPattern from "../../Assets/images/pattern-bg-desktop.png";
import MobilePattern from "../../Assets/images/pattern-bg-mobile.png";

// Components
import { InputField } from "../Base/InputField";

export function Hero() {
	// Media Query
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:1224px)",
	});

	function GetImageResource() {
		if (isDesktopOrLaptop) return DesktopPattern;
		else return MobilePattern;
	}

	return (
		<>
			<img
				src={GetImageResource()}
				alt="Pattern"
				className="w-full lg:w-full absolute -z-10"
			/>
			<div className="w-fulll py-10 max-h-64 overflow-hidden flex flex-col justify-center items-center gap-5">
				<h1 className="text-white text-3xl font-[400]">IP Address Tracker</h1>
				<InputField />
			</div>
		</>
	);
}
