import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import App from './App'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AppRoute
