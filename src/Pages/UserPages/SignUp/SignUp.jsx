import React from 'react';
import './Signup.css';
import Navbar from '../../../Components/UserComponents/Nav/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="signup-wrapper">
                <div className="signup-card">
                    <h2>Create Account</h2>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
