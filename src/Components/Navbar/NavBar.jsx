import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

function NavBar() {
    return (
        <nav className="header">
            <img src={logo} alt="Logo" />
            <div className="information">
                <a href="/" className="btn">About Us</a>
                <a href="/" className="btn">Programs</a>
                <a href="/" className="btn-contact">Contact Us - 00000000000</a>
            </div>
        </nav>
    );
}

export default NavBar;