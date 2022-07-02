import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
import './Register.css'

export default function Register() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error,setError] = useState('')
    const navigate = useNavigate()

    const {CreateUser} = UserAuth()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await CreateUser(email,password)
            navigate('/Login')
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }


  return (
    <form onSubmit={handleSubmit} className='form-container'>
        <h2>Register User</h2>
        <label className='label'>Email</label>
        <input type={'email'} onChange={e=>{setEmail(e.target.value)}}/>
        <label className='label'>Password</label>
        <input type={'password'} onChange={e=>{setPassword(e.target.value)}}/>
        <Link to='/Login' className='link'>if you already have an account, Log in.</Link>
        <button className='Button'>Register</button>
    </form>
  )
}
