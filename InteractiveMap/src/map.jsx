import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const Map = () => {

    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "80%", width: "80%", margin: "5% 10% 5% 10%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )

}


export default Map
