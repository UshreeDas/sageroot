import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/MainPage/Main";
import University from "./Components/University/University";
import Footer from "./Components/Footer/footer";
import UserForm from "./Components/Form/form";
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/university" element={<University/>}/>
                    <Route path="/contact" element={<UserForm/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;