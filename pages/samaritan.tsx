import {Image} from 'antd'
import Link from 'next/link'
import HomeLayout from '~/components/layout/Home'
import AchivementTab from '~/components/widgets/Dashboard/AchievementTabs'

export default function Samaritan(){
    const bio = "I am PrinceNonso Ireogbu, a freelancer and an Intern with the Roothub Accelerator Systems, Portharcourt. I am a front-end web developer instructor. I am also a Blockchain marketer and Ambassador to a few crypto projects. I got passionate about helping to build a better climate after working for the Brokoli Network Project. One with the vision to save our environment as it keeps depleting every single day. With the help of the project, I have been able to plant some trees with my name on it. I am interested in keeping my family and friends safe and planting more trees do ensures that."

  return (
    <HomeLayout>
    <div className="collabo-container mx-auto">
         <h3 className="text-center text-4xl my-4">Good Samaritan Of The Week!</h3>
          <div className="md:grid grid-cols-3 mb-10">
            <div className="p-3 col-span-1">
               <div className="my-3 text-center">
                    <Image src="/images/profile.png" 
                    className="mx-auto" 
                    style={{maxWidth:"300px"}} 
                    preview={false} alt="profile"
                    />
                </div>
               <div className="mx-auto" style={{maxWidth:300}}>
                {/* <button>
                    <i className="bi bi-geo-alt"></i>
                    <span className="ml-2">Add Location</span>
                </button>
                <p>
                    <i className="bi bi-person-fill"></i>
                    <span className="ml-2">Member since 2022</span>
                </p> */}
             </div>
            </div>
            <div className="p-3 col-span-2">
                <header className='flex items-center justify-between'>
                   <div className='flex items-center'>
                    <i className="bi bi-person-fill"></i>
                    <p className='px-3 collabo-txt-theme font-bold'>PrinceNonso Ireogbu</p>
                   </div>
                   <div className='flex items-center'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p className='px-3  font-bold'>Portharcourt, Nigeria</p>
                   </div>
                </header>
                <hr />
                <div>
                <p className="my-4 font-bold text-sm">
                    {bio}
                </p>
                </div>
            </div>
          </div>
          <AchivementTab/>
          <Link href={"/"}>
          <button className="text-center w-full">Go back To <b>HomePage</b></button>
          </Link>
    </div>
    </HomeLayout>
  )
}