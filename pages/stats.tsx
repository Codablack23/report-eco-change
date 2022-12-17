import { useEffect,useState } from "react"
import HomeLayout from "~/components/layout/Home"

export default function Stats(){
    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch("https://api.waqi.info/feed/lagos/?token=13dea804f30d270f4e35bd2c96eb686e2b2b50c2")
            const data = await response.json()
            console.log(data)
        }
        getData()
    },[])
    return(
       <HomeLayout>
        <div className="collabo-container mx-auto">
         <h3 className="py-5 font-bold collabo-txt-theme text-4xl">Statistics</h3>
            <div className="flex items-center py-3 justify-around">
              <div className="flex items-center">
                <div className="bg-green-600 h-8 w-8"></div>
                <p className="ml-2">Good</p>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-600 h-8 w-8"></div>
                <p className="ml-2">Moderate</p>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 h-8 w-8"></div>
                <p className="ml-2">Unhealthy For the sensitive </p>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 h-8 w-8"></div>
                <p className="ml-2">Unhealthy</p>
              </div>
            </div>
            <div>
            <iframe src="/html/index.html" style={{height:"500px"}} width={"100%"}></iframe>
            </div>
        </div>
       </HomeLayout>
    )
}