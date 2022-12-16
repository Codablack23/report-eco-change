import { onAuthStateChanged } from 'firebase/auth'
import {createContext,useEffect,useState} from 'react'
import FirebaseActions from '~/utils/FirebaseActions'

interface UserData{
    isLogged:boolean
    user?:{
     email:string,
     userID:string,
     [key:string]:any
    }
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
                email:user.email as string,
                userID:user.uid
            }
          }) 
         }
         else{
            setData({
                isLogged:false,
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