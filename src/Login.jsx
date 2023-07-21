import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import usersData from "./users.json";

let user;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
            user = usersData.find(
            (user) => user.email === email && user.password === password
        );

        if(user) {
            setIsLoggedIn(true);
        }
        else {
            alert("Invalid email or password");
        }
    };

    if(isLoggedIn) {
        switch (user.role) {
            case "admin":
                return <Navigate to= "/admin" />;
            case "client":
                return <Navigate to= "/client" />;
            case "resident":
                return <Navigate to= "/resident" />;
        }
    };
    
    return (
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <br/>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br/>
        <button className="link-btn" onClick={handleLogin}>Login</button>
        </form>
      </div>
    );
};

export default Login;


