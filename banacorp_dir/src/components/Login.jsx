import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const setLogin = props.login;

    const login = async () => {
        // setLogin(true);
        // navigate("/home");
        console.log("Here we are:", username, password)
        try {
            const response = await fetch(`http://localhost:3000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });
            const data = await response.json();
            if(data.uid) {
                // setUser({
                //     username, 
                //     uid: data.uid // Storing the uid returned from the server
                // });
                setLogin(true);
                navigate("/home");
            } else {
                throw new Error(data.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (event) => {
        console.log("What's happening?")
        event.preventDefault();
        login();
    };
    return(
        <div className="container">
            <form onSubmit={handleLogin} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
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
    );
};

export default Login;
