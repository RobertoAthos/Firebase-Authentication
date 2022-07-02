import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

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
            navigate('/dashboard')
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }


  return (
    <form onSubmit={handleSubmit}>
        <h2>Register User</h2>
        <label>Email</label>
        <input type={'email'} onChange={e=>{setEmail(e.target.value)}}/>
        <label>Password</label>
        <input type={'password'} onChange={e=>{setPassword(e.target.value)}}/>
        <Link to='/Login'>Login</Link>
        <button>Register</button>
    </form>
  )
}
