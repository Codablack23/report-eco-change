import HomeLayout from "~/components/layout/Home";
import { useContext, useEffect, useState } from "react";
import { Image, Modal, Skeleton, Spin } from "antd";
import Tabs from "~/components/widgets/Dashboard/Tabs";
import AchivementTab from "~/components/widgets/Dashboard/AchievementTabs";
import NotificationsTab from "~/components/widgets/Dashboard/NotificationTab";
import { AuthContext } from "~/contexts/AuthContext";

function LoadingState(){
  return(
    <div className="collabo-container mx-auto">
      <div className="md:grid grid-cols-3 gap-2 mb-10">
        <div className="collabo-card p-3 col-span-1">
            <Skeleton.Button
             active
             block={true}
             style={{
                height:"200px"
             }}
            />
            <p className="my-4"></p>
            <Skeleton
            active
            paragraph={{rows:8}}
            />
        </div>
        <div className="p-3 col-span-2">
         <div className="grid grid-cols-2 gap-2">
           <Skeleton.Button
             active
             block={true}
             style={{
                height:"40px"
             }}
             />
           <Skeleton.Button
             active
             block={true}
             style={{
                height:"40px"
             }}
           />
         </div>
         <p className="my-5"></p>
         <Skeleton.Button
            active
            block={true}
            style={{
               height:"300px"
            }}
          />
      </div>
      </div>
    </div>
  )
}
export default function Dashboard(){
     const {data} = useContext(AuthContext)
     console.log(data)
     const tabContent = [
        {
        index:1,
        title:"Achivements",
        component:<AchivementTab/>
        },
        {
          index:2,
          title:"Notifications",
          component:<NotificationsTab/>
         },
       ]

      useEffect(()=>{
        if(!data.isLogged){
            window.location.assign("/dashboard/login")
        }
      })
     const [chars,setChars] = useState(200)
     const bio = "I am PrinceNonso Ireogbu, a freelancer and an Intern with the Roothub Accelerator Systems, Portharcourt. I am a front-end web developer instructor. I am also a Blockchain marketer and Ambassador to a few crypto projects. I got passionate about helping to build a better climate after working for the Brokoli Network Project. One with the vision to save our environment as it keeps depleting every single day. With the help of the project, I have been able to plant some trees with my name on it. I am interested in keeping my family and friends safe and planting more trees do ensures that."
      return (
       <HomeLayout>
        <>
        {data.isLoading?
        <LoadingState/>
        :<div className="collabo-container mx-auto">
          <div className="md:grid grid-cols-3 mb-10">
            <div className="collabo-card p-3 col-span-1">
               <div className="my-3 text-center">
                    <Image src="/images/profile.png" 
                    className="mx-auto" 
                    style={{maxWidth:"300px"}} 
                    preview={false} alt="profile"
                    />
                </div>
               <div className="mx-auto" style={{maxWidth:300}}>
               <div className="flex items-center justify-between my-2">
                 <input className="font-bold collabo-txt-theme mr-2 outline-none" value={"PrinceNonso Ireogbu"} readOnly/>
                 <i className="bi bi-pencil text-gray-300 cursor-pointer"></i>
                </div>
                <button>
                    <i className="bi bi-geo-alt"></i>
                    <span className="ml-2">Add Location</span>
                </button>
                <p>
                    <i className="bi bi-person-fill"></i>
                    <span className="ml-2">Member since 2022</span>
                </p>
                <p className="my-4 font-bold text-sm">
                    {bio.slice(0,200)} {
                    chars < bio.length
                    ?<button className="font-bold text-gray-400 text-sm">...<i>Read More</i></button>
                    :<button className="font-bold text-gray-400 text-sm"><i>See Less</i></button>
                    }
                </p>
             </div>
            </div>
            <div className="p-3 col-span-2">
              <Tabs
              tabs={tabContent}
              />
            </div>
          </div>
        </div>}
        </>
       </HomeLayout>
    )
}