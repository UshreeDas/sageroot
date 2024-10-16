import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="header">
            <Link to="/"><img src="./SAGEROOTS INTERNATIONAL (3).svg" className="logo" alt="Logo" /></Link>
            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`information ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}>X</button>
                <Link to="/" className="btn">About Us</Link>
                <Link to="/university" className="btn">Programs</Link>
                <a href="/contact" className="btn-contact">Contact Us - 6291799937</a>
            </div>
        </nav>
    );
}

export default NavBar;