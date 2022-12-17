
interface AcardProps{
    title:string,
    value?:number,
    iconName?:string,
    [key:string]:any
}
function ACard({title,value,iconName}:AcardProps){
    return(
        <div className="border border-gray-300 px-5 py-1 mr-3 my-2 flex items-center">
            <i className={`${iconName}`}></i>
            <p className="text-small mx-2">{title}</p>
            <p className="collabo-bg-theme p-1 text-sm">{value?value:0}</p>
        </div>
    )
}

export default function AchivementTab(){
  
  return(
    <div className="collabo-card my-5 py-6">
       <div className="flex flex-wrap items-center p-3 my-3">
           <ACard title="Task Completed" value={20} iconName="bi bi-bag-fill"/>
           <ACard title="Ongoing Task" value={3} iconName="bi bi-bag-fill"/>
           <ACard title="Badge" value={1} iconName="bi bi-star-fill"/>
           <ACard title="Recommendation" value={0} iconName="bi bi-pencil-fill"/>
           <ACard title="Flag" value={12} iconName="bi bi-flag-fill"/>
       </div>
       <div className="p-2 flex items-center justify-between bg-gray-200 px-3 py-3">
        <div className="flex items-center">
            <i className="bi bi-trophy-fill"></i>
            <p className="mx-2">Total Points Gained</p>
            <p className="font-bold">213</p>
        </div>
        <div className="flex items-center">
            <i className="bi bi-star-fill"></i>
            <p className="mx-2">Ranking</p>
            <p className="font-bold">72nd</p>
        </div>
       </div>
    </div>
  )
}