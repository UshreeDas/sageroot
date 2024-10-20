import React,{useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/MainPage/Main";
import Footer from "./Components/Footer/footer";
import UniversitySection from "./Components/University-section/university-section";

import './App.css';


function App() {
    useEffect(() => {
        document.body.classList.add('no-scrollbar');
        return () => {
            document.body.classList.remove('no-scrollbar');
        };
    }, []);
    return (
        <Router>
            <div className="app-container">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/university" element={<UniversitySection/>}/>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;