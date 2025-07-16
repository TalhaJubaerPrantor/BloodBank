import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logedContext from "../../../Context/Context"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const value=useContext(logedContext);
  const navigate=useNavigate();


  let logedInMenu={display:""}
  let logedOutMenu={display:""}
  if(value.isLogged=="true"){
    logedOutMenu.display="none";
    logedInMenu.display=""

  }else{
    logedInMenu.display="none"
    logedOutMenu.display="";
  }

  const handleLogOut=()=>{
    window.localStorage.setItem("isLogedIn",false)
    navigate('/');
  }

  return (
    <header className="nav-header">
      <Link to="/" className="nav-logo">🩸 BloodBank</Link>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link style={logedOutMenu} to="/" >Home</Link>
        <Link style={logedOutMenu} to="/about" >About</Link>
        <Link style={logedOutMenu} to="/athentication" className="nav-btn">Sign Up</Link>

        <Link to="/" style={logedInMenu}>My Profile</Link>
        <Link to="/" style={logedInMenu}>Dashboard</Link>
        <Link to="/" style={logedInMenu}>Requests</Link>
        <Link to="/" style={logedInMenu}>Donate</Link>
        <Link onClick={handleLogOut} to="/" style={logedInMenu}>LogOut</Link>


      </nav>

      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
