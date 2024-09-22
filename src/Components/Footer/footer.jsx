import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";
import logo from "./logo.png";
import top from "./Back to top .svg"

function Footer() {
    return (
        <div className="footer">
            <div className="first-footer">
             <img src={logo} alt="Logo" className="logo-footer" />
             <p className="plan">A plan for every dream</p>
             <a href="/" className="privacy">
             <p  className="policy">Privacy Policy
            <br></br> Terms & Conditions</p>
            </a>
                <a href="/" className="back-to-top" >
            <img src={top} alt="" className="up-arrow"/>
            <p className="top">Back to top</p>
            </a>
            </div>
            <hr></hr>
                <p className="copy"> 
All rights reserved &copy; 2024 Sageroots International
</p>
            
        </div>
    );
}

export default Footer;