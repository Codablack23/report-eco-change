import {Image} from 'antd'
import Link from 'next/link'

export default function Samaritan(){

    return (
        <div className="ml-auto w-full">
        <h3 className="font-black text-3xl py-3 px-3 bg-gray-300 collabo-txt-theme mb-2">Good Samaritan Of the Week</h3>
         <div className="border border-gray-300 rounded-lg p-3 md:flex items-center">
          <div className='md:w-5/12 mr-3'>
            <Image src='/images/profile.png' preview={false} width={"100%"} className='rounded' alt='challenge'/>
          </div>
          <div className="md:w-7/12">
            <h3 className="text-gray-300 font-bold text-xl">PrinceNonso Ireogbu</h3>
            <p className='my-2 text-sm'>{"PrinceNonso Ireogbu, a freelancer and an Intern with the Roothub accelerator systems, Portharcourt, a front-end web developer instructor who is also a Blockchain marketer and Ambassador to a few crypto projects.he is passionate about helping to build a better climate after working for the Brokoli Network Project. One with the vision to save our environment as it keeps depleting every single day. With the help of the project, he has been able to plant some trees with my name on it. He is alo interested in keeping his family and friends safe and planting more trees do ensures that.".slice(0,150)}...</p>
            <Link href={"/samaritan"}>
            <button className='my-2'>
                <i className="bi bi-trophy-fill"></i>
                <span className="font-bold text-sm ml-2">View Achievements</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
}