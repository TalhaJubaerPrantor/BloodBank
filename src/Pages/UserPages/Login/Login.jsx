import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../../../Components/UserComponents/Nav/Navbar';
import logedContext from '../../../Context/Context';
import { useEffect } from 'react';

const Login = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const loginDetails = {
        "email": email,
        "password": password
    }

    const handleLoging = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);

        await fetch("http://localhost:5000/loguser", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == true) {
                    window.localStorage.setItem("isLogedIn",true);
                    navigate("/user/dashboard");
                }
            })
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-card">
                    <h2>Welcome Back</h2>
                    <form onSubmit={handleLoging}>
                        <div className="form-group">
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="login-btn">Log In</button>
                        <p className="signup-link">Don't have an account? <Link to="/athentication">Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
