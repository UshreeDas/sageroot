import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/MainPage/Main";
import University from "./Components/University/University";
import Category from "./Components/Category/category";
import Why from "./Components/Why-choose/why-choose";
import About from "./Components/About-us/about-us";

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/university" element={<University/>}/>
                </Routes>
            </div>
        </Router>
      


    );
}

export default App;
