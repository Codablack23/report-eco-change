import DeckGL,{GeoJsonLayer} from 'deck.gl'
import Geocoder from "react-map-gl-geocoder";


export default function getDeckGLPackages(){
    return {
      DeckGL,
      Geocoder,
      GeoJsonLayer
    }
}