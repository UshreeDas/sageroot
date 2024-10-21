import React,{useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/MainPage/Main";
import University from "./Components/University/University";
import Footer from "./Components/Footer/footer";
// import FormContact from "./Components/Form/formContact";


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
                    <Route path="/" element={<Main />} />
                    <Route path="/university" element={<University />} />
                    {/* <Route path="/contact" element={<FormContact />} /> */}
                </Routes>
                <Footer />
                
            </div>
        </Router>
    );
}

export default App;