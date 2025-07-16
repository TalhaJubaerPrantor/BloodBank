import React from "react";
import "./Home.css";
import { data, Link } from "react-router-dom";
import Navbar from "../../../Components/UserComponents/Nav/Navbar";
import { useEffect } from "react";

const Home = () => {

  

  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1 style={{ textAlign: "center" }}>
            Your <span>One Drop</span> Can <br /> Save A <span>Life</span>
          </h1>
          <p >
            Join thousands of heroes who donate blood and help those in urgent need.
          </p>
          <div className="hero-buttons">
            <Link to="/athentication" className="btn-primary">Enter The Community Now</Link>
            {/* <button className="btn-secondary">Find Donor</button> */}
          </div>
        </div>

        <div className="hero-info">
          <div className="info-card">
            <h2>Before Donating</h2>
            <ul>
              <li>No alcohol 24hrs before</li>
              <li>Eat light & stay hydrated</li>
              <li>Sleep well the night before</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>After Receiving</h2>
            <ul>
              <li>Thank your donor</li>
              <li>Use blood responsibly</li>
              <li>Report any reaction</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
