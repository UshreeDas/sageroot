import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="header">
            <img src="./logo.png" alt="Logo"/>
            <div className="information">
                <Link to="/" className="btn">About Us</Link>
                <Link to="/university" className="btn">Programs</Link>
                <a href="/contact" className="btn-contact">Contact Us - 6291799937</a>
            </div>
        </nav>
    );
}

export default NavBar;