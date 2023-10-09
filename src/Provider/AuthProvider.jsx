import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const useAll = createContext(null)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user,setUser] = useState(null)
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }
    const updateUserProfile = (name,photoUrl) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL: `${photoUrl}`
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe()
    },[])
   const allInfos = {
     createUser,
     loginUser,
     updateUserProfile,
     user,
     logOut,
     loading,
     loginWithGoogle
   };
    return (
        <useAll.Provider value={allInfos}>
            {children}
        </useAll.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;