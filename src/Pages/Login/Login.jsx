
import React from 'react'
import {Link} from 'react-router-dom'


export default function Login() {

  return (
    <div>
        <form>
            <label>Email</label>
            <input type={'email'}/>
            <label>Password</label>
            <input type={'password'} />
            <Link to='/Register'>Create Account</Link>
            <button>Sign in</button>
        </form>
    </div>
  )
}
