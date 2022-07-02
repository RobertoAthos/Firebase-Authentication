import { UserAuth } from '../../Context/AuthContext'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

export default function Login() {

    const[email,setEmail]= useState('')
    const[password,setPassword] = useState('')
    const[error, setError] = useState('')
    const navigate = useNavigate()

    const {LoginUser} = UserAuth()

    const handlesubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try {
            await LoginUser(email, password)
            navigate('/dashboard')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

  return (
    <div className='body-container'>
        <h2>Log in</h2>
        <form onSubmit={handlesubmit} className='form-container-login'>
            <label className='label-login'>Email</label>
            <input type={'email'} onChange={e=>{
                setEmail(e.target.value)
            }}/>
            <label className='label-login'>Password</label>
            <input type={'password'} onChange={e=>{
                setPassword(e.target.value)
            }} />
            <Link to='/' className='link'>Create Account</Link>
            <button className='Button-login'>Sign in</button>
        </form>
    </div>
  )
}
