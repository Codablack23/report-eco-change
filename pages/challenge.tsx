import HomeLayout from "~/components/layout/Home";

interface TodoProps{
    todo:{
        id:number,
        task_id:number,
        title:string,
        description:string,
    },
}

function Challenge({todo}:TodoProps){
    return (
        <div className="collabo-card p-3 mt-4 gap-3 md:grid grid-cols-3" id='todo'>
        <div>
        <div className="bg-gray-300 p-2">
            <div className="bg-gray-300 flex items-center justify-center" style={{height:"250px"}}>
                <p className="font-bold-text-">Upload Activity Pictures</p>
            </div>
            <div className="flex justify-between">
                <p className='font-bold text-sm'>0/0</p>
                <button><i className="bi bi-upload"></i></button>
            </div>
        </div>
        <button className="collabo-outline collabo-txt-theme border w-full my-2 py-2 ">View Completion Rate</button>
        </div>
        <div className="col-span-2">
            <header>
                <h3 className="text-3xl"><span className='font-bold'>Task </span>: {todo.title}</h3>
                <p className="text-lg my-3">{todo.description}</p>
            </header>
            <div className="collabo-card w-full flex px-5 py-3 items-center justify-between">
                <input type="text" placeholder='Message' className="w-10/12 outline-none" />
                <div className="flex items-center">
                    <button>
                        <i className="bi bi-paperclip"></i>
                    </button>
                    <button>
                        <i className="bi bi-mic-fill"></i>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end my-3">
                <button className="collabo-outline collabo-txt-theme border p-2 mr-5">Activity Checker</button>
                <button className="collabo-bg-theme p-2  px-5">Save</button>
            </div>
            <div className="flex items-center py-3">
                <p>
                <i className="bi bi-clipboard-data-fill"></i>
                <span className='font-bold text-sm ml-1'>Scoreboard</span>
                </p>
                <button className='mx-5'>
                    <i className="bi bi-reply-fill"></i> 
                    <small className="text-sm font-bold">Share</small>
                </button>
                <p className="mr-5">
                <i className="bi bi-person-plus-fill"></i>
                <span className='font-bold text-sm ml-1'>2208</span>  
                </p>
                <p>
                 <i className="bi bi-stopwatch-fill"></i>
                 <span className='collabo-txt-theme font-bold text-sm ml-1'>76:56:15 Hr(s)</span>
                </p>
            </div>
        </div>
      </div>
    )
}
export default function WeeklyChallenge():JSX.Element{
    const challenge =     {
        id:3,
        task_id:3,
        title:"Reduce your use of plastic.",
        description:"Find alternatives to plastic whenever possible, and properly dispose of the plastic you do use to keep it out of our oceans and other waterways.",
    }
    return (
        <HomeLayout>
        <div>
         <header className="bg-gray-200">
          <div className="collabo-container mx-auto">
             <h3 className="text-5xl collabo-txt-theme font-bold" >Weekly<br/> Challenge</h3>
          </div>
         </header>
         <div className="collabo-container my-2 mx-auto">
            <p>
            Join the tens and thousands good Samaritans doing their part by connecting with the literal earth by completing our weekly challenge. Get started now!
          </p>
            <h3 className="my-2 collabo-txt-theme font-bold text-3xl">
            Join the challenge and contribute your quota...
            </h3>
            <div>
            <Challenge todo={challenge}/>
            </div>
         </div>
        </div>
      </HomeLayout>
    )
}