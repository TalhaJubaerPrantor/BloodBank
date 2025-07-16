import React from "react";
import "./UserDashboard.css";
import { Link } from "react-router-dom";


const UserDashboard = () => {
  return (
    <div className="dashboard">
      
      <main className="dashboard-main">
        <section className="welcome-section">
          <h1>Welcome back, Prantor!</h1>
          <p>Every drop you donate writes someone’s survival story.</p>
          <div className="action-buttons">
            <Link to="/user/donate"><button className="btn-red">Donate Now</button></Link>
            <Link to="/user/donors"><button className="btn-outline">Find Donor</button></Link>
          </div>
        </section>

        <div className="grid">
          <div className="card">
            <h2>Your Activity</h2>
            <ul>
              <li><strong>Last donated:</strong> 2 months ago</li>
              <li><strong>Blood group:</strong> B+</li>
              <li><strong>Next eligible:</strong> Aug 20, 2025</li>
            </ul>
          </div>

          <div className="card">
            <h2>Urgent Requests Near You</h2>
            <ul>
              <li>Akash D. — O− — 3 hours</li>
              <li>Sumaiya R. — B+ — 5 hours</li>
            </ul>
            <a href="#">View All Requests</a>
          </div>

          <div className="card">
            <h2>Your Impact</h2>
            <ul>
              <li><strong>Total donations:</strong> 4</li>
              <li><strong>Your Refferals:</strong> 11</li>
              <li><strong>Hours volunteered:</strong> 23</li>
            </ul>
          </div>

          <div className="card">
            <h2>Announcements</h2>
            <ul>
              <li>🩸 Blood Camp at Central Hospital on July 14</li>
              <li>⚠️ Maintenance: July 15, 2 AM</li>
            </ul>
          </div>

          <div className="card highlight-card">
            <h2>Become a SuperDonor 🏅</h2>
            <p>Donate 5 times to unlock special rewards.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
