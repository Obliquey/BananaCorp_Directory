import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [managerID, setManagerID] = useState('');
    const [isHR, setIsHR] = useState(false);
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleRegister = async () => {
        const userInfo = {
            name: name,
            phoneNumber: phoneNumber,
            jobRole: jobRole,
            location: location,
            managerID: managerID,
            isHR: isHR
        }
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            })
        } catch (error) {
            console.error("Error connecting to server", error);
        }
    };
    return(
        <div className="container" style={{textAlign:"left", border:" 1px solid black", borderRadius:"10px", padding:'10px'}}>
            <form onSubmit={handleRegister} className="mt-5">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;