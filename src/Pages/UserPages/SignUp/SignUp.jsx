import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../../../Components/UserComponents/Nav/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [group, setGroup] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const signUpDetails = {
        "name": name,
        "email": email,
        "phone": phone,
        "dob": dob,
        "group": group,
        "address": address,
        "password": password
    }

    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);
    let [errorMsg, setErrorMsg] = useState("");

    const handleSignup = async (e) => {
        setIsError(false);
        setIsLoading(true);
        e.preventDefault();
        await fetch("http://localhost:5000/reguser", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(signUpDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == true) {
                    // Register is successfull. Navigation to next page 
                    navigate('/user/dashboard');
                } else {
                    // There was a problem. Registration not completed
                    // Show error msg
                    setIsError(true);
                    setErrorMsg(data.message)
                }
                setIsLoading(false);
            })
    }

    return (
        <>
            <div className="signup-wrapper">
                <div className="signup-card">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSignup}>
                        <div className='input-container'>
                            <div className="form-group">
                                <label htmlFor='name'>Full Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" id='name' placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input onChange={(e) => setemail(e.target.value)} type="email" id='email' placeholder="user@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="tel" id='phone' placeholder="01****-*****" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='dob'>Date of Birth</label>
                                <input onChange={(e) => setDob(e.target.value)} type="date" id='dob' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="group">Blood group</label>
                                <select style={{ color:'black' }} onChange={(e) => setGroup(e.target.value)} name="group" id="group" placeholder="Choose" required>
                                    <option value="" > Select</option>
                                    <option value="IDK">&nbsp;Don't know my blood group</option>
                                    <option value="A+">&nbsp;A+</option>
                                    <option value="A-">&nbsp;A-</option>
                                    <option value="B+">&nbsp;B+</option>
                                    <option value="B-">&nbsp;B-</option>
                                    <option value="AB+">&nbsp;AB+</option>
                                    <option value="AB-">&nbsp;AB-</option>
                                    <option value="O+">&nbsp;O+</option>
                                    <option value="O-">&nbsp;O-</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor='address'>Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" id='address' placeholder="Enter your address" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label id='password'>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="signup-btn">{isLoading ? "Loading..." : "SignUp"}</button>
                        <p style={{ color: "red", textAlign: "center" }}>{isError ? errorMsg : ""}</p>
                        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
