import {Image} from 'antd'

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

function  RedAlert({alert}:Alert):JSX.Element{
    return (
      <li className="mb-8">
        <h3 className="font-bold text-xl collabo-txt-theme">{alert.heading}</h3>
        <p className='font-bold my-2 text-sm'>{alert.content}</p>
        <Image src={alert.img_src} preview={false} className="rounded-lg" height={"240px"} width="100%" alt="image post"/>
        <div className="flex itmes-center">
            <button className='mr-5'><i className="bi bi-reply-fill"></i> Share</button>
            <button className='mr-5'><i className="bi bi-hand-thumbs-up-fill"></i> {alert.likes}</button>
        </div>
      </li>
    )
}

export default function RedAlerts():JSX.Element{
    const data  = [
        {
            id:1,
            heading:"Climate change, conflict force communities in the Sahel region into desperate state",
            content:"The suffering of millions of people in Mali and the wider Sahel region is rooted in the deadly combination of conflict and the climate crisis",
            img_src:"/images/img1.png",
            location:"Mali, West Africa",
            likes:123
        },
        {
            id:2,
            heading:"The world’s land plays a key role in the climate system as an essential carbon sink that regulates the planet’s temperature and absorbs its carbon emissions",
            content:"The world’s land — including its mountains, hills, plateaus and plains — provides vital services, such as oxygen, food and water, that are essential for life. Land is also home to much of the world’s biodiversity.",
            img_src:"/images/img7.png",
            location:"Lagos, Nigeria",
            likes:809
       }
    ]
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