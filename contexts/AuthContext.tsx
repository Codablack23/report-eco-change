import { onAuthStateChanged } from 'firebase/auth'
import {createContext,useEffect,useState} from 'react'
import FirebaseActions from '~/utils/FirebaseActions'

interface UserDetails{
    email:string | any,
    uid:string,
    [key:string]:any,
}
interface UserData{
    isLogged:boolean
    user?:UserDetails|null
    isLoading?:boolean
}
interface Data{
    data:UserData
    [key:string]:any
}
export const AuthContext = createContext<Data>({
    data:{
        isLogged:false,
        isLoading:true
    }
})

export default function AuthContextProvider(props:any){ 
    const auth = FirebaseActions.getAuth()
    const [userData,setData] = useState<UserData>({
      isLogged:true,
      isLoading:true
    })
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
         if(user){
          console.log(user)
          setData({
            isLogged:true,
            user:{
                ...user
            },
             isLoading:false
          }) 
         }
         else{
            setData({
                isLogged:false,
                user:null,
                isLoading:true
            })
         }
        })
    }, [auth])
   return (
    <AuthContext.Provider value={{data:userData}}>
        {props.children}
    </AuthContext.Provider>
   )
}