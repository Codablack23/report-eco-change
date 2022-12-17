import React, { useState } from "react"

interface Tab{
    index:number|string,
    title:string
    component:React.FC|JSX.Element,
    [key:string]:any
}
interface Props{
    tabs:Tab[],
    activeTab?:string|number
}
export default function Tabs({tabs,activeTab}:Props){
   const [active,setActive] = useState(activeTab?activeTab:tabs[0].index)
   const currentTab = tabs.find(t=>t.index === active)
    
   function changeTab(tabIndex:string|number){
      return ()=>setActive(tabIndex)
   }
   const width = `${(((1/tabs.length)-1)*100) - 5}%`
   return (
   <div className="w-full">
    <>
    <header className="flex align-items">
      {
        tabs.map((tab)=>(
            <div 
            onClick={changeTab(tab.index)}
            style={{width}}  
            className={`${tab.index === active?"collabo-bg-theme":"bg-gray-100"} w-6/12 py-2 cursor-pointer text-center mr-3 block`} 
            key={tab.index}>
            {tab.title}
            </div>
        ))
      }
     
    </header>
    {currentTab?
       currentTab.component
      :null}
    </>
   </div>
   )
}