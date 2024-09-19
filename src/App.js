import React from "react";

import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/MainPage/Main";
import University from "./Components/University/University";

import './App.css';

function App() {
    return (
        <div className="app-container">
            <NavBar/>
            <Main/>
            <University/>
        </div>


    );
}

export default App;
