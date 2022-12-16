import {Image} from "antd"
import Link from 'next/link'


export default function Footer():JSX.Element{
    return (
        <footer className="bg-black mx-auto text-white ">
         <div className="collabo-container mx-auto flex flex-col md:flex-row items-center" style={{minHeight:"100px"}}>
            <div className="brand">
             <Image src={"/images/logo-dark.png"} preview={false} style={{maxWidth:"150px"}} alt="logo"/>
            </div>
            <div className="collabo-navlist mx-3 my-3 flex items-center">
              <Link href={"/"} legacyBehavior>
                <a className="mx-4 font-bold">Statistics</a>
               </Link> 
               <Link href={"/"} legacyBehavior>
                <a className="font-bold">Blog</a>
               </Link>
            </div>
            <div className="collabo-nav-action flex flex-col md:flex-row items-center md:ml-auto">
                <p className="text-sm mx-5 my-2">C 2022 All Rights Reserved, Collabo</p>
                <div className="flex">
                <p><i className="bi bi-facebook"></i></p>
                <p className="mx-3"><i className="bi bi-twitter"></i></p>
                <p><i className="bi bi-linkedin mr-3"></i></p>
                <p><i className="bi bi-instagram"></i></p>
                </div>                
            </div>
          </div>
        </footer>
    )
}