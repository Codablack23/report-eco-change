import Navbar from "../widgets/Navbar";
import React from 'react'
import Footer from "../widgets/Footer";
import Head from "next/head";

interface Props{
    children:React.ReactElement,
    title?:string
}

export default function HomeLayout({children,title}:Props):JSX.Element{
  return (
    <div className="collabo-home-layout">
      <Head>
        <title>Collabo | {title}</title>
      </Head>
       <Navbar/>
       <div>
        {children}
       </div>
       <Footer/>
    </div>
  )
}