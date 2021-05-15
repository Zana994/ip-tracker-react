import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { useState, useEffect } from 'react'
import markerIcon from "../images/icon-location.svg"
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({ coord }) => {
    const defaultCenter = [43.3438, 17.8078]
    const [position, setPosition] = useState({x: 43.3438, y: 17.8078})
    const myMarker = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [40, 50]
    })
    
    function MyComponent() {
        const map = useMap()
        //console.log(`map center is: ${map.getCenter()}`)
        map.setView([position.x, position.y], 13)
        return null
    }

    useEffect(() => {
        setPosition({x: coord.x, y: coord.y})

    }, [coord.x, coord.y])
  
    return (
        <div id="map">
            <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={true} style={{height:"100%"}}>
                <MyComponent />
                
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.x,position.y]} icon={myMarker}></Marker>
            </MapContainer>
        </div>
    )
}

export default Map
