import { onAuthStateChanged } from 'firebase/auth'
import {createContext,useEffect,useState} from 'react'
import FirebaseActions from '~/utils/FirebaseActions'

interface UserDetails{
    email:string | any,
    uid:string,
    [key:string]:any
}
interface UserData{
    isLogged:boolean
    user?:UserDetails|null
}
interface Data{
    data:UserData
    [key:string]:any
}
export const AuthContext = createContext<Data>({
    data:{
        isLogged:false
    }
})

export default function AuthContextProvider(props:any){ 
    const auth = FirebaseActions.getAuth()
    const [userData,setData] = useState<UserData>({
      isLogged:true,
    })
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
         if(user){
          console.log(user)
          setData({
            isLogged:true,
            user:{
                ...user
            }
          }) 
         }
         else{
            setData({
                isLogged:false,
                user:null
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