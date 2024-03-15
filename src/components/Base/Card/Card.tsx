import { IPData } from "src/interface/IPData.interface";

export function Card({ APIData }: { APIData: IPData }) {
	const { ip, isp, location } = APIData;

	return (
		<main className="w-4/5 md:h-42 bg-white shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)] rounded-xl flex flex-col lg:flex-row justify-stretch gap-10 absolute top-[35%] text-[#969696] py-10 px-10">
			<section className="w-full lg:w-1/4">
				<h3>IP Address</h3>
				<h1 className="Information-display">{ip ? ip : ""}</h1>
			</section>
			<div className="hidden lg:block h-20 w-[0.5px] rounded-lg bg-[#969696]"></div>
			<section className="w-full lg:w-1/4">
				<h3>Location</h3>
				<h1 className="Information-display">
					{location?.city ? `${location?.city}, ${location?.region}` : ""}
				</h1>
			</section>
			<div className="hidden lg:block h-20 w-[0.5px] rounded-lg bg-[#969696]"></div>

			<section className="w-full lg:w-1/4">
				<h3>Timezone</h3>
				<h1 className="Information-display">
					{location?.timezone ? `UTC-${location?.timezone.slice(1)}` : ""}
				</h1>
			</section>
			<div className="hidden lg:block h-20 w-[0.5px] rounded-lg bg-[#969696]"></div>
			<section className="w-full lg:w-1/4">
				<h3>ISP</h3>
				<h1 className="Information-display">{isp ? isp : ""}</h1>
			</section>
		</main>
	);
}
