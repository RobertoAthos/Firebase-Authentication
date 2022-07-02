import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}
