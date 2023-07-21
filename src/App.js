import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Admin from "./Admin";
import Client from "./Client";
import Resident from "./Resident";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}> </Route>
        <Route exact path="/admin" element={<Admin/>}> </Route>
        <Route exact path="/client" element={<Client/>}> </Route>
        <Route exact path="/resident" element={<Resident/>}> </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
