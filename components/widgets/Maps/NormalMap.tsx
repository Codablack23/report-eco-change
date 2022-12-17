import { useEffect, useState } from 'react'
import Map,{Marker} from 'react-map-gl'

interface ViewPort{
    latitude?:any,
    longitude?:any,
    zoom?:number,
    [key:string]:any
}
export default function NormalMap(){
    const [viewport,setViewPort] = useState<ViewPort>({
        longitude:0,
        latitude:0,
        zoom:6
    })
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos)=>{
            setViewPort((prev)=>({
                ...prev,
                latitude:pos.coords.latitude,
                longitude:pos.coords.longitude,
            }))
        })
    }, [])
    return (
        <Map
        mapboxAccessToken="pk.eyJ1IjoiY29kYWJsYWNrMjMiLCJhIjoiY2xicWtxcnp3MDdnZTNwcWRncmozcjdnMCJ9.zm9f6S0NSgLuJClMVMlAhA"
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
        longitude={viewport.longitude}
        latitude={viewport.latitude}
        />
      </Map>

    )
}