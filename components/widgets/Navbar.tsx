import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar():JSX.Element{
 const [isLoggedIn,setisLoggedIn] = useState(false)
 return (
    <nav className="collabo-navbar collabo-container mx-auto flex items-center">
      <div className="brand">
       <Link href={"/"} legacyBehavior>
        <Image src={"/images/logo.png"} className="cursor-pointer" width="100" height={"100"} alt="logo"/>
        </Link>
      </div>
      <div className="collabo-navlist mx-3">
        <Link href={"/"} legacyBehavior>
            <a className="mx-4 font-bold">Statistics</a>
        </Link> 
        <Link href={"/"} legacyBehavior>
            <a className="font-bold">Blog</a>
        </Link>
      </div>
     {
      isLoggedIn?(
      <div className="collabo-nav-action flex items-center ml-auto">
         <p><i className="bi bi-bell-fill text-gray-600 text-xl"></i></p>
         <p className="mx-3"><i className="bi bi-person-circle text-gray-600 text-3xl"></i></p>
      </div>
      )
      :(
        <div className="collabo-nav-action flex items-center ml-auto">
        <Link href={"/dashboard/login"} legacyBehavior>
            <a className="mx-4 font-bold">Login</a>
        </Link> 
        <Link href={"/dashboard/register"} legacyBehavior>
            <a className="font-bold">Register</a>
        </Link>
      </div>
      )
     }
    </nav>
 )   
}