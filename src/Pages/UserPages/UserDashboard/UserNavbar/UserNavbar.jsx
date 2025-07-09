import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
    return (
        <div>
            <header className="dashboard-header">
                <div className="logo">🩸 BloodBank</div>
                <nav>
                    <Link to="/user/dashboard">Dashboard</Link>
                    <Link to="/user/dashboard">My Profile</Link>
                    <Link to="/user/dashboard">Requests</Link>
                    <Link to="/user/dashboard">Donate</Link>
                    <Link to="/user/dashboard">Logout</Link>

                </nav>
            </header>
        </div>
    );
};

export default UserNavbar;