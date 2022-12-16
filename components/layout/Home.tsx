import Navbar from "../widgets/Navbar";
import React from 'react'
import Footer from "../widgets/Footer";

interface Props{
    children:React.ReactElement
}

export default function HomeLayout({children}:Props):JSX.Element{
  return (
    <div className="collabo-home-layout">
       <Navbar/>
       <div>
        {children}
       </div>
       <Footer/>
    </div>
  )
}