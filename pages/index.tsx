import Button from 'antd/es/button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import HomeLayout from '~/components/layout/Home'
import CarouselComponent from '~/components/widgets/Home/Carousel'
import RedAlerts from '~/components/widgets/Home/RedAlerts'
import Samaritan from '~/components/widgets/Home/Samaritan'
import TodoList from '~/components/widgets/Home/TodoList'
import WeeklyChallenge from '~/components/widgets/Home/WeeklyChallenge'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className="collabo-container m-auto">
       <div className="collabo-hero mt-6 mb-2 mx-auto text-center">
        <h3 className=" text-2xl md:text-5xl font-bold">Let&apos;s <span className="collabo-txt-theme">join hands together</span> to make our <span className='collabo-txt-theme'>environment clean</span> and <span className="collabo-txt-theme">safe</span> for <span className="collabo-txt-theme">all mankind!</span></h3>
        <div className="sub-title justify-center flex items-center my-5">
             <Image src={"/images/arrowleft.png"} width={"30"} height="30" alt='emoji'/>
             <p className="mx-2 font-bold text-2xl text-gray-300">Learn</p>
             <Image src={"/images/emoji.png"} width={"50"} height="50" alt='emoji'/>
             <p className="mx-2 font-bold text-2xl text-gray-300">Contribute</p>
             <Image src={"/images/arrowright.png"} width={"30"} height="30" alt='emoji'/>
        </div>
       </div>
       <div className="md:grid md:grid-cols-2 md:gap-2 mt-5">
         <div>
          <CarouselComponent/>
           <RedAlerts/>
          </div> 
         <div>
            <WeeklyChallenge/>
            <br />
            <TodoList/><br />
            <Samaritan/>
         </div>
         <hr  className='my-4'/>
         <hr />
       </div>
      </div>
    </HomeLayout>
  )
}

export default Home
