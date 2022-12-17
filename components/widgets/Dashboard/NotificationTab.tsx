import moment from "moment"

interface NotificationProps{
    message:string,
    timestamps?:Date | string | number,
    [key:string]:any
}

function Notification({message,timestamps}:NotificationProps){
   return(
    <div className="grid grid-cols-5 items-center border border-gray-300 p-3 my-3">
    <div className="col-span-1">
     <div className="rounded-full  h-12 w-12 flex items-center justify-center bg-gray-200 text-white">
        <i className="bi bi-bell"></i>
      </div>
    </div>
      <div className="col-span-4">
        <p className="text-2xl">{message}</p>
        <p className="text-xs font-bold">{moment(timestamps?.valueOf(), "YYYYMMDD").fromNow()}</p>
      </div>
    </div>
   )
}

export default function NotificationsTab(){
    const notifications:NotificationProps[] = [
        {
            id:1,
            message:"You have beeen selected as the Good Samaritan of the week, congratulations!",
            timestamps:new Date("16-12-22")
        },
        {
            id:2,
            message:"You have successfully completed task 3",
            timestamps:new Date("15-12-22")
        }
    ]
    return(
      <div className="">
        {notifications.map(n=>(
            <Notification key={n.id} message={n.message} timestamps={n.timestamps}/>
        ))}
      </div>
    )
  }