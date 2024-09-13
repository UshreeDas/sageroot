import React from "react";
import "./nav-bar.css";
function navbar () {
    return (
        
        <nav className="header">
        <img src="logo.png" 
        style="height: 7%;width: 7%; margin-left: 10%;"/>
        <div className="information">
        <a href="about-us">About us</a>
                <a href="course">Programs</a>
                <a href="tel:00000000000" className="btn btn--contact">00000000000</a> 
            </div>     
    </nav>
    )
}
export default navbar;