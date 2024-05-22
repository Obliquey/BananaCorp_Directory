import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        phoneNumber: "",
        jobRole: "",
        location: "",
        salary: "",
        managerID: '',
        isHR: false
        
    });
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            })
        } catch (error) {
            
        }
    };
    return(
        <div className="container">
            <form onSubmit={handleRegister} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default RegisterForm;