import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const useAll = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth , email, password)
    }
    const updateUserProfile = (name,photoUrl) =>{
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL: `${photoUrl}`
        })
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])
   const allInfos = {
     createUser,
     loginUser,
     updateUserProfile,
     user,
     logOut
   };
    return (
        <useAll.Provider value={allInfos}>
            {children}
        </useAll.Provider>
    );
};

export default AuthProvider;