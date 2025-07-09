import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">🩸 BloodBank</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/athentication">Find Donor</Link>
        <Link to="/about">About</Link>
        <Link to="/athentication"><button  className="navbar-btn">Sign Up</button></Link>
        
      </nav>
    </header>
  );
};

export default Navbar;
