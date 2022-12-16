import {Image} from 'antd'
import { useRouter } from 'next/router'

export default function WeeklyChallenge():JSX.Element{
  const Router = useRouter()

    return (
        <div className="ml-auto md:w-10/12">
            <h3 className="font-black text-3xl">Weekly Challenge</h3>
            <p className="my-4 text-sm">Join the tens and thousands good Samaritans doing their part by connecting with the literal earth by completing our weekly challenge. Get started now!</p>
            <div className="border border-gray-300 rounded-lg p-3 md:flex items-center">
              <div className='md:w-4/12 mr-3'>
                <Image src='/images/img2.png' width={"100%"} className='rounded' alt='challenge'/>
              </div>
              <div className="md:w-8/12">
                <p className='font-bold text-sm'>Plant something by physically connecting with the literal earth...</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 py-3">
                <p>
                 <i className="bi bi-stopwatch-fill"></i>
                 <span className='collabo-txt-theme font-bold text-sm ml-1'>76:56:15 Hr(s)</span>
                </p>
                <button className='mr-5'>
                    <i className="bi bi-reply-fill"></i> 
                    <small className="text-sm font-bold">Share</small>
                </button>
                <p>
                 <i className="bi bi-person-plus-fill"></i>
                 <span className='font-bold text-sm ml-1'>2208</span>  
                </p>
            </div>
            <button className="collabo-bg-theme block w-full my-3 py-2 rounded-lg" onClick={()=>Router.push("/challenge")}>Start</button>
        </div>
    )
}