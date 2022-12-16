import { 
    FirebaseApp, 
    FirebaseError, 
    initializeApp
 } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    deleteUser,
    GoogleAuthProvider
 } from "firebase/auth";

import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";

interface Response{
    status:string,
    error?:FirebaseError|unknown,
    user?:{
        [key:string]:any
    },
    [key:string]:any
}
interface DocData{
    [key:string]:any
}
interface Data{
    email:string,
    password:string,
}
interface SignUpData extends Data{
   full_name:string,
   [key:string]:string
}
class FirebaseActions{
    private provider = new GoogleAuthProvider()
    private config={
        apiKey: "AIzaSyBou9F3wcBw83wLV4J3yIluZ_VfbdKhH8s",
        authDomain: "collabo-371719.firebaseapp.com",
        projectId: "collabo-371719",
        storageBucket: "collabo-371719.appspot.com",
        messagingSenderId: "814080263078",
        appId: "1:814080263078:web:7e7c31d4c128e53b3a0567",
        measurementId: "G-NLRK35JQW4"
    }
    private app:FirebaseApp = initializeApp(this.config)
    private auth = getAuth(this.app)
    private db = getFirestore(this.app)

    async login(data:Data):Promise<Response>{
      try {
        const user = await signInWithEmailAndPassword(this.auth,data.email,data.password)
        return {
            status:"success",
            user:user.user
        }
      } catch(error) {
        console.log(error)
        return {
            status:"failed",
            error:(error as FirebaseError).message.toString()
        }
      }
    }
    async signUp(data:SignUpData){
        
        try {
            const user = await createUserWithEmailAndPassword(this.auth,data.email,data.password)
            const dbResponse = await this.addDoc({
                Name:data.full_name,
                userID:user.user.uid
            },
                "collabo_profile"
            )
            if(dbResponse.status === "success"){
                return {
                    status:"success",
                    user:user.user
                }
            }else{
                await deleteUser(user.user)
                return {
                    status:"failed",
                    error:dbResponse.error,
                }
            }
            
          } catch (error) {    
            console.log(error)        
            return {
                status:"failed",
                error:(error as FirebaseError).message.toString(),
            }
          }
    }
    async logOut(){

    }
    async googleLogin(){
      try {
        const result = await signInWithPopup(this.auth,this.provider)
        return {
            status:"success",
            user:result.user
        }
      } catch (error) {
        return {
            status:"failed",
            error:(error as FirebaseError).message.toString(),
        }
      }
    }
    async addDoc(data:DocData,dbName:string){
         try {
            const docRef = await addDoc(collection(this.db,dbName),{
               ...data
            })
            return {
                status:"success",
                doc_id:docRef.id
            }
         } catch (error) {
            console.log(error)
            return {
                status:"failed",
                error:(error as FirebaseError).message.toString(),
            }
         }
    }
    getAuth(){
        return this.auth
    }
    

}


export default new FirebaseActions()