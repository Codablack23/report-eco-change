import {Image} from 'antd'
import { alertData } from '~/utils/data'
interface Alert{
    alert:{ 
        id:number,
        heading:string,
        content:string,
        img_src:string,
        likes:number|string,
        [key:string]:any
    }
}

export function  RedAlert({alert}:Alert):JSX.Element{
    const goToPage=(id:number)=>{
     return ()=>window.location.assign(`/red-alerts/${id}`)
    }
    return (
      <li className="mb-8">
        <h3 className="font-bold text-xl collabo-txt-theme">{alert.heading.slice(0,60)}...</h3>
        <p className='font-bold my-2 text-sm'>{alert.content.slice(0,100)}</p>
        <Image src={alert.img_src} preview={false} className="rounded-lg" height={"240px"} width="100%" alt="image post"/>
        <div className="flex itmes-center">
            <button className='mr-5'><i className="bi bi-reply-fill"></i> Share</button>
            <button className='mr-5'><i className="bi bi-hand-thumbs-up-fill"></i> {alert.likes}</button>
            <button className='mr-5 collabo-bg-theme px-3 py-1' onClick={goToPage(alert.id)}>Read More</button>
        </div>
      </li>
    )
}

export default function RedAlerts():JSX.Element{
 const data = alertData
 return (
    <section className="collabo-red-alerts-container my-12 md:w-4/5">
        <h3 className="font-bold text-3xl">Red Alerts</h3>
        <ul className="collabo-red-alerts-list">
        {data.map((alert)=>(
            <RedAlert alert={alert} key={alert.id}/>
        ))}
      </ul>
    </section>
 )
}