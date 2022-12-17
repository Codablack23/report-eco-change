// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import '../styles/style.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import type { AppProps } from 'next/app'
import AuthContextProvider from '~/contexts/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
}

export default MyApp
