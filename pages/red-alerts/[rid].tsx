import { Image, Skeleton } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeLayout from "~/components/layout/Home";
import { alertData } from "~/utils/data";

interface Alert{
        id?:number,
        heading?:string,
        content?:string,
        img_src?:string,
        likes?:number|string,
        [key:string]:any
}
function LoadingScreen(){
    return (
        <div>
            <Skeleton.Button
            block={true}
            active
            style={{
                height:"300px"
            }}
            />
            <p className="my-4"></p>
            <Skeleton
            active
            paragraph={{rows:10}}
            />
        </div>
    )
}
function NotFound(){
    return(
        <div className="flex items-center w-full justify-center" style={{height:"70vh"}}>
           <div className="flex-1 text-center">
             <h3 className="text-5xl font-bold">404</h3>
             <p className="my-2">The Resource you are looking for does not exist or have been moved</p>
             <Link href={"/"}>
             <button className="collabo-bg-theme px-3 py-1">Back Home</button>
             </Link>
           </div>
        </div>
    )
}
export default function RedAlert(){
    const [isLoading,setIsLoading] = useState(true)
    const [post,setPost] = useState<Alert>({})
    const Router = useRouter()

    useEffect(()=>{
      setIsLoading(true)
      const alert = alertData.find((a)=>a.id === parseInt(Router.query.rid as string))
      setIsLoading(false)
      if(alert){
        setPost(alert)
      }
    },[Router])

    return (
        <HomeLayout>
            <div className="collabo-container mx-auto">
             {isLoading
             ?<LoadingScreen/>
             :Object.keys(post).length>0?
             (
              <>
               <h1 className="font-bold text-3xl">Red Alert {">"} {Router.query.rid}</h1>
               <div className="my-4">
                 <div >
                   <Image
                   className="object-cover"
                   width={"100%"}
                   height={"250px"}
                   src={post.img_src}
                   alt={post.heading}
                   />
                 </div>
                 <div className="md:flex items-center">
                  <div className="flex items-center">
                  <button className='mr-5'><i className="bi bi-reply-fill"></i> Share</button>
                  <button className='mr-5'><i className="bi bi-hand-thumbs-up-fill"></i> {post.likes}</button>
                  </div>
                  <p className="text-xs">Source:{post.source}</p>
                  <p className="text-xs ml-auto font-bold">{post.location}</p>
                 </div>
                 <p className="font-bold text-3xl collabo-txt-theme py-2">{post.heading}</p>
                 <p className="font-bold">{post.sub_heading}</p>
                 <p>{post.content}</p>
               </div>
             </>
             )
             :<NotFound/>
             }
            </div>
        </HomeLayout>
    )
}