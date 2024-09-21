import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png";

function NavBar() {
    return (
        <nav className="header">
            <img src={logo} alt="Logo" />
            <div className="information">
                <Link to="/" className="btn">About Us</Link>
                <Link to="/university" className="btn">Programs</Link>
                <a href="/" className="btn-contact">Contact Us - 00000000000</a>
            </div>
        </nav>
    );
}

export default NavBar;