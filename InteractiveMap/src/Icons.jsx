import { Icon } from 'leaflet';
import carMarker from './assets/CarImage.png'

const CarIcon = new Icon({
    iconUrl: carMarker,
    iconSize: [70, 70], // size of the icon
    iconAnchor: [5, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

}) 
export default CarIcon