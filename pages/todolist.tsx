import {useEffect, useState} from 'react'
import HomeLayout from '~/components/layout/Home'

const todoList = [
    {
        id:1,
        task_id:1,
        title:"Bring Your Own bottle or mug",
        description:"It’s a teensy thing, but bringing your own reusable cup or coffee mug is easy and feels good. Sometimes you even get drink discounts for using these things.",
    },
    {
        id:2,
        task_id:2,
        title:"Replace inefficient bulbs.",
        description:"Inspired by research conducted by the California Lighting Technology Center at UC Davis, the University of California’s Million LED Challenge enables UC students, staff and faculty to order high-quality LED bulbs at reduced cost. For everyone else, there are several options on the market. Learn how to choose the right light.",
    }, 
    {
        id:3,
        task_id:3,
        title:"Turn off some lights.",
        description:"Turn off lights in empty rooms (of course) but also ask yourself, “Do I really even need this light on?” I recently had a meeting in a climate science professor’s office that was only lit by daylighting from the window and it was, well, enlightening.",
    },  
    {
        id:4,
        task_id:4,
        title:"Walk/bike to where you’d normally drive today.",
        description:"Even parking your car and riding a bike the rest of the way to your destination can save fossil fuel emissions and introduce some exercise to your day. A 2015 study by the Institute of Transportation Studies at UC Davis found that a dramatic global increase in bicycling could reduce urban transportation emissions up to 10 percent by 2050.",
    },
    {
        id:5,
        task_id:5,
        title:"Plant something.",
        description:"Physically connecting with the literal earth and caring for what’s grown helps you understand and appreciate it. All the better if what you plant is native and attracts pollinators like bees, butterflies and hummingbirds.",
    },
]

interface TodoProps{
    todo:{
        id:number,
        task_id:number,
        title:string,
        description:string,
    },
    task_id:number
}

function Todo({todo,task_id}:TodoProps){
    useEffect(() => {
      const todoEl = document.querySelector('#todo') as HTMLDivElement
      todoEl.animate([
        {opacity:0},
        {opacity:1},
      ],{
        duration:1000,
      })   
    }, [task_id])
    return (
        <div className="collabo-card p-3 mt-4 gap-3  md:grid grid-cols-3" id='todo'>
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
        <button className="collabo-outline collabo-txt-theme border w-full my-2 py-2">View Completion Rate</button>
        </div>
        <div className="col-span-2">
            <header>
                <h3 className="text-3xl"><span className='font-bold'>Task {todo.task_id}</span>: {todo.title}</h3>
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
            <div className="flex items-center justify-between my-3">
                <p className='font-bold text-sm'>Task {todo.task_id}/5</p>
                <div className="flex items-center">
                <button className="collabo-outline collabo-txt-theme border p-2 mr-5">Activity Checker</button>
                <button className="collabo-bg-theme p-2 px-4">Save</button>
                </div>
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
                <p>
                <i className="bi bi-person-plus-fill"></i>
                <span className='font-bold text-sm ml-1'>2208</span>  
                </p>
            </div>
        </div>
      </div>
    )
}
export default function TodoList(){
    const [task_id,setTaskId] = useState(0)
    function handleNext(){
       if(task_id < todoList.length - 1){
        setTaskId(prev=>prev+1)
       }else{
        setTaskId(0)
       }
       
    }
    function handlePrev(){
        if(task_id > 0){
         setTaskId(prev=>prev-1)
        }else{
            setTaskId(todoList.length - 1)
        }
        
     } 
    return (
        <HomeLayout>
          <div>
           <header className="collabo-bg-theme">
            <div className="collabo-container mx-auto">
               <h3 className="text-5xl font-bold" >Basic ToDo List</h3>
            </div>
           </header>
           <div className="collabo-container my-2 mx-auto">
              <p>
              For those of you resolving to do your part to reduce your emissions and engage more sustainably with the planet and those living here, we offer 18 simple, low-budget things that add up. Consider them re-solutions:
              </p>
              <h3 className="my-2 collabo-txt-theme font-bold text-3xl">
              5 Simple Things You Can Do About Climate Change...
              </h3>
              <div>
              <Todo todo={todoList[task_id]} task_id={task_id}/>
              </div>
              <div className="flex justify-end my-7">
              {
                task_id > 0?
                <button onClick={handlePrev} className="bg-gray-200 p-2 px-10">Back</button>
                :null
              }
             {
                task_id < todoList.length - 1?
                <button onClick={handleNext} className="bg-black p-2 ml-5 text-white px-10">Next</button>
                :null
             }
              </div>
           </div>
          </div>
        </HomeLayout>
    )
}