import HomeLayout from "~/components/layout/Home";

interface inputProps{
    value?:string,
    handler?:()=>any,
    errorMessage?:string,
    placeholder?:string,
    type?:string,
    [key:string]:any
}
function Input({value,handler,errorMessage,placeholder,type}:inputProps):JSX.Element{
    return (
     <div className="my-3">
        <input type={type?type:"text"}
        className="border w-full p-1 px-2 outline-none border-gray-300 rounded"
        value={value} 
        onChange={handler}
        placeholder={placeholder}
        />
        <p className="text-xs text-red-400">{errorMessage}</p>
     </div>
    )
}

export default function Register():JSX.Element{
   
    return (
       <HomeLayout>
        <section className="my-10">
            <form className="collabo-card p-2 mx-auto" style={{maxWidth:"420px",minHeight:350}}>
              <h3 className="text-center my-1 font-bold text-2xl">Register</h3>
              <div className="mx-auto w-11/12">
                
              <Input
              placeholder="Full Name"
              />
              <Input
              placeholder="Email"
              />
              <Input
              placeholder="Password"
              type="password"
              />
              <Input
              placeholder="Confirm Password"
              type="password"
              />
              <button className="my-2 w-full py-2 collabo-bg-theme rounded">Continue</button>
              <button className="my-2 w-full py-2 collabo-outline border collabo-txt-theme rounded">
                <i className="bi bi-google"></i>
                <span> Register With Google</span>
              </button>
              <button className="my-2 w-full py-2 bg-black text-white rounded">Login</button>
              </div>
            </form>
        </section>
       </HomeLayout>
    )
}