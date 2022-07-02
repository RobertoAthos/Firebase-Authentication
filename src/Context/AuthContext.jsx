import React, { createContext,useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebaseConfig.jsx'
const UserContext = createContext()

export const AuthContext = ({children})=>{
    const[user,setUser] = useState({})

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signout = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const logout = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
            logout()
        }
    },[])

  return (
    <UserContext.Provider value={{CreateUser, signout, LoginUser}}>
        {children}
    </UserContext.Provider>
  )
}

export const UserAuth = ()=>{
    return useContext(UserContext)
}