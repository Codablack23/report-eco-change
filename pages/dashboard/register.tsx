import { Modal, notification, Spin } from "antd";
import Link from "next/link";
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

export default function Register():JSX.Element{
    const [isLoading,setIsLoading] = useState(false)
    const [email,setEmail] = useState("")
    const [full_name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [cPassword,setCPasword] = useState("")

    function handleInput(setState:Dispatch<SetStateAction<string>>){
       return (e:any)=>setState(e.target.value)
    }
    async function handleSubmit(e:any){
       e.preventDefault()
       if(password !== cPassword){
        notification.error({
            message:"Password Error",
            description:<p>Passwords Do no Match</p>
          })
       }else{
        setIsLoading(true)
        const response = await FirebaseActions.signUp({email,password,full_name})
        setIsLoading(false)
        if(response.status === "success"){
           window.location.assign("/dashboard")

        }else{
          notification.error({
            message:"Failed",
            description:<p>{response.error as string}</p>
          })
        }
       }
    }
    async function handleGoogleLogin(){
      const response = await FirebaseActions.googleLogin()
      if(response.status === "success"){
        window.location.assign("/dashboard")
      }else{
        notification.error({
          message:"Failed",
          description:<p>{response.error as string}</p>
        })
      }
    }
    return (
       <HomeLayout>
        <section className="my-10">
          <Modal open={isLoading} centered footer={null} closable={false}>
                <div className="flex w-full justify-between items-center">
                    <div className="text-center w-full">
                        <Spin size="large"/>
                    </div>
                </div>
            </Modal>
            <form onSubmit={handleSubmit} className="collabo-card p-2 mx-auto" style={{maxWidth:"420px",minHeight:350}}>
              <h3 className="text-center my-1 font-bold text-2xl">Register</h3>
              <div className="mx-auto w-11/12">
                
              <Input
              placeholder="Full Name"
              value={full_name}
              handler={handleInput(setName)}
              required={true}
              minLength={3}
              />
              <Input
               value={email}
               handler={handleInput(setEmail)}
               required={true}
              placeholder="Email"
              />
              <Input
                 value={password}
                 handler={handleInput(setPassword)}
                 required={true}
                 minLength={8}
                 placeholder="Password"
                type="password"
              />
              <Input
                 value={cPassword}
                 handler={handleInput(setCPasword)}
                 required={true}
                 minLength={8}
              placeholder="Confirm Password"
              type="password"
              />
              <button  className="my-2 w-full py-2 collabo-bg-theme">Continue</button>
              <button type="button" onClick={handleGoogleLogin} className="my-2 w-full py-2 collabo-outline border collabo-txt-theme">
                <i className="bi bi-google"></i>
                <span>Continue With Google</span>
              </button>
             <Link href={"/dashboard/login"}>
               <button type="button" className="my-2 w-full py-2 bg-black text-white">Login</button>
             </Link>
              </div>
            </form>
        </section>
       </HomeLayout>
    )
}