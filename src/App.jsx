import { useState } from 'react'

import './App.css'
import Home from './Pages/UserPages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/UserPages/SignUp/SignUp'
import Login from './Pages/UserPages/Login/Login'
import About from './Pages/UserPages/About/About'
import UserDashboard from './Pages/UserPages/UserDashboard/UserDashboard'
import Donor from './Pages/UserPages/Donor/Donor'
import Donate from './Pages/UserPages/Donate/Donate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/athentication' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/user/donors' element={<Donor />} />
        <Route path='/user/donate' element={<Donate />} />

      </Routes>
    </>
  )
}

export default App
