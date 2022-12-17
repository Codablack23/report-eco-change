import { Modal, notification, Spin } from "antd";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import HomeLayout from "~/components/layout/Home";
import FirebaseActions from "~/utils/FirebaseActions";

interface inputProps{
    value?:string,
    handler?:(e:any)=>any,
    errorMessage?:string,
    placeholder?:string,
    type?:string,
    [key:string]:any
}
function Input({value,handler,errorMessage,placeholder,type,...extraProps}:inputProps):JSX.Element{
    return (
     <div className="my-3">
        <input type={type?type:"text"}
        className="border w-full p-1 px-2 outline-none border-gray-300 rounded"
        value={value} 
        onChange={handler}
        placeholder={placeholder}
        {...extraProps}
        />
        <p className="text-xs text-red-400">{errorMessage}</p>
     </div>
    )
}
async function handleGoogleLogin(){
  const response = await FirebaseActions.googleLogin()
  if(response.status === "success"){
     console.log(response)
  }else{
    notification.error({
      message:"Failed",
      description:<p>{response.error as string}</p>
    })
  }
}
export default function Login():JSX.Element{
     const router = useRouter()
     const [isLoading,setIsLoading] = useState(false)
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")

     function handleInput(setState:Dispatch<SetStateAction<string>>){
        return (e:any)=>setState(e.target.value)
     }
     async function handleSubmit(e:any){
        e.preventDefault()
        setIsLoading(true)
        const response = await FirebaseActions.login({email,password})
        setIsLoading(false)
        if(response.status === "success"){
           const next = router.query?.next
           window.location.assign(next?(next as string):"/dashboard")
        }else{
          notification.error({
            message:"Failed",
            description:<p>{response.error as string}</p>
          })
        }
     }

    return (
       <HomeLayout>
        <section className="my-10" style={{marginBottom:120}}>
            <Modal open={isLoading} centered footer={null} closable={false}>
                <div className="flex w-full justify-between items-center">
                    <div className="text-center w-full">
                        <Spin size="large"/>
                    </div>
                </div>
            </Modal>
            <form onSubmit={handleSubmit} className="collabo-card p-2 mx-auto" style={{maxWidth:"420px",minHeight:350}}>
              <h3 className="text-center my-1 font-bold text-2xl">Login</h3>
              <div className="mx-auto w-11/12">
              <Input
              placeholder="Email"
              type="email"
              value={email}
              handler={handleInput(setEmail)}
              required={true}
              />
              <Input
              placeholder="Password"
              type="password"
              value={password}
              handler={handleInput(setPassword)}
              min={8}
              minLength={8}
              required={true}
              />
              <p className="text-sm font-bold"><i>Forgot Password?</i></p>
              <button className="my-2 w-full py-2 collabo-bg-theme">Login</button>
              <button 
               type="button"
               onClick={handleGoogleLogin}
               className="my-2 w-full py-2 collabo-outline border collabo-txt-theme">
                <i className="bi bi-google"></i>
                <span> Login With Google</span>
              </button>
                 <Link href={"/dashboard/register"}>
                 <button type="button" className="my-2 w-full py-2 bg-black text-white">Register</button>
                </Link>
              </div>
            </form>
        </section>
       </HomeLayout>
    )
}