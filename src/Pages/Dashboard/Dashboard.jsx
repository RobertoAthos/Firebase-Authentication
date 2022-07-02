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
    <div className='Dash-container'>
        <h2>User Logged in:</h2>
        {auth.currentUser.email}
       <div className='btn-container' onClick={handlelogout}> <button>LogOut</button></div>
      </div>

 
  )
}
