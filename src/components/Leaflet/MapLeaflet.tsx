import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Tooltip,
	useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";

// Leaflet
import "leaflet/dist/leaflet.css";

// INterface
import { IPData } from "src/interface/IPData.interface";

export function MapLeaflet({ APIData }: { APIData: IPData }) {
	const { location, ip } = APIData;

	function getLatLng(): LatLngExpression {
		if (location) return [location.lat, location.lng]! as LatLngExpression;

		return [0, 0] as LatLngExpression;
	}

	function MarkerFunction() {
		return (
			<Marker position={getLatLng()}>
				{ip ? (
					<>
						<Popup>{ip}</Popup>
						<Tooltip>{ip}</Tooltip>
					</>
				) : (
					""
				)}
			</Marker>
		);
	}

	function ChangeMapView({ coords }: { coords: LatLngExpression }) {
		const map = useMap();
		map.flyTo(coords, 18, { animate: true });
		return null;
	}

	return (
		<MapContainer
			className="h-[150vh] lg:h-screen w-full -z-0"
			center={getLatLng()}
			zoom={13}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<MarkerFunction />
			<ChangeMapView coords={getLatLng()} />
		</MapContainer>
	);
}
