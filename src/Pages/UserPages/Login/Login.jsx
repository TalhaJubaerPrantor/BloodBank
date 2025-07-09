import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/UserComponents/Nav/Navbar';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login-wrapper">
                <div className="login-card">
                    <h2>Welcome Back</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="login-btn">Log In</button>
                        <p className="signup-link">Don't have an account? <Link to="/athentication">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
