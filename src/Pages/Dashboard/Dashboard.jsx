import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
import { auth } from '../../firebaseConfig.jsx'

export default function Dashboard() {
  const navigate = useNavigate()
  const {signout} = UserAuth()

  const handlelogout = async()=>{
      try{
          await signout()
          navigate('/')
          console.log("youre log out")
      }catch (e){
        console.log(e.message)
      }
  }

  return (
    <>
        <div>User Logged in</div>
        {auth.currentUser.email}
        <button onClick={handlelogout}>LogOut</button>
    </>

 
  )
}
