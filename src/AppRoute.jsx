import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import App from './App'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<App/>}/>
    </Routes>
  )
}

export default AppRoute
