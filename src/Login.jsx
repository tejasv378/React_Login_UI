import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import usersData from "./users.json";

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
        const user = usersData.find(
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
        switch(user.role) {
            case "admin":
                return <Navigate to= "/admin" />;
            case "client":
                return <Navigate to= "/client" />;
            case "resident":
                return <Navigate to= "/resident" />;
        }
    }
}


