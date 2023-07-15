import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import usersData from "./users.json";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
}