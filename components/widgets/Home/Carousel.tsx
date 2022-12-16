import {Carousel,Image} from 'antd'


export default function CarouselComponent():JSX.Element{
    const images = [
        // "/images/img1.png",
        // "/images/img2.png",
        // "/images/img3.png",
        "/images/img4.png",
        "/images/img5.png",
        "/images/img6.png",
        // "/images/img7.png",
        "/images/img8.png",
    ]
  return (
    <div className='relative w-full'>
    <button className="rounded-full absolute text-white z-50 -left-5 h-10 w-10 bg-gray-300" style={{top:"35%"}}>
     <i className="bi bi-arrow-left"></i>
    </button>
   
    <Carousel autoplay dots={true}>
     {images.map((img)=>(
        <div style={{height:"280px"}} key={img}>
           <div 
           className="opacity-50 w-full absolute top-0 left-0" 
           style={{
            background:"rgba(0,0,0,0.05)",
            height:"280px"
            }}></div>
           <Image src={img} preview={false} height={"280px"} width={"100%"} alt={img}/>
        </div>
     ))}
  </Carousel>
  <button className="rounded-full absolute text-white h-10 -right-5 w-10 bg-gray-300" style={{top:"35%"}}>
   <i className="bi bi-arrow-right"></i>
   </button>
   <div className="flex justify-between py-2 items-center">
     <p className="text-gray-700 text-sm">Source:The World Bank Group Organization</p>
     <p className="text-gray-700 text-sm">Lagos, Nigeria</p>
   </div>
   <button className="collabo-bg-theme px-7 py-2 rounded-lg">See Statistics</button>
  </div>
  )
}