import './App.css'
import Home from './Pages/UserPages/Home/Home'
import { data, Route, Routes } from 'react-router-dom'
import Signup from './Pages/UserPages/SignUp/SignUp'
import Login from './Pages/UserPages/Login/Login'
import About from './Pages/UserPages/About/About'
import UserDashboard from './Pages/UserPages/UserDashboard/UserDashboard'
import Donor from './Pages/UserPages/Donor/Donor'
import Donate from './Pages/UserPages/Donate/Donate'
import Footer from './Components/UserComponents/Footer/Footer'
import Context from './Context/Context'
import { use, useEffect, useState } from 'react'
import Navbar from './Components/UserComponents/Nav/Navbar'


function App() {

  const loged = window.localStorage.getItem("isLogedIn");

  const [isLogged, setIsLogged] = useState(loged);

console.log(loged==="true");
  return (
    <>
      <Context.Provider value={{ isLogged, setIsLogged }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/athentication' element={isLogged==="true" ? <UserDashboard /> : <Signup />} />
          <Route path='/login' element={isLogged==="true" ? <UserDashboard /> : <Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/donors' element={<Donor />} />
          <Route path='/user/donate' element={<Donate />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App
