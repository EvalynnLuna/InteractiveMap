import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import CarIcon from './Icons.jsx'


const Map = () => {
    const position = [51.4466, 5.4575]
    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={true} style={{ height: "80%", width: "80%", margin: "5% 10% 5% 10%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={CarIcon}>
                <Popup>
                    A popup to show files. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}


export default Map


