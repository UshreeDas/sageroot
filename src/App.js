import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Main from "./Components/MainPage/Main";
import Footer from "./Components/Footer/footer";
import UniversitySection from "./Components/University-section/university-section";
import FormContact from "./Components/Form/formContact";
import About from "./Components/About-us/about-us";
import Loading from "./Components/Loading/loading";
import HowToApply from "./Components/how-to-apply/how-to-apply";

// import NavBar from "./Components/Navbar/NavBar";
import Navbar from "./Components/Navbar/Nav";
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="app-container">
            {loading && <Loading />}
            {!loading && (
                <>  
                  <Navbar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/university" element={<UniversitySection />} />
                        <Route path="/contact" element={<FormContact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/apply" element={<HowToApply />} />
                    </Routes>
                    <Footer />
                      
                </>
            )}
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;