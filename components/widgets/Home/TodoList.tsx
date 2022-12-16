import {Image} from 'antd'
import { useRouter } from 'next/router'

export default function TodoList():JSX.Element{
  const Router = useRouter()

  return ( 
  <div className="ml-auto md:w-10/12">
  <h3 className="font-black text-3xl">Basic Todo List</h3>
  <p className="my-4 text-sm">For those of you resolving to do your part to reduce your emissions and engage more sustainably with the planet and those living here, we offer 18 simple, low-budget things that add up. Consider them “re-solutions:</p>
  <div className="collabo-bg-theme rounded-lg p-3 md:flex items-center">
    <div className='md:w-4/12 mr-3'>
      <Image src='/images/img3.png' preview={false} width={"100%"} className='rounded' alt='challenge'/>
    </div>
    <div className="md:w-8/12">
      <p className='font-bold text-sm'>18 Simple Things You Can Do About Climate Change...</p>
    </div>
  </div>
  <div className="flex justify-between items-center p-2 py-3">
      <p>
       <i className="bi bi-clipboard-data-fill"></i>
       <span className='font-bold text-sm ml-1'>Scoreboard</span>
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
  <button className="collabo-bg-theme block w-full my-3 py-2 rounded-lg" onClick={()=>Router.push("/todolist")}>Start</button>
</div>)
}