import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="first-footer">
                <img src="/Logo(Normal).svg" alt="Logo" className="logo" />
                <p className="plan">A plan for every dream</p>
                <a href="/" className="privacy">
                    <p className="policy">Privacy Policy
                        <br></br> Terms & Conditions</p>
                </a>
                <a href="/" className="back-to-top">
                    <img src="/Back to top .svg" alt="" className="up-arrow" />
                    <p className="top">Back to top</p>
                </a>
            </div>
            <hr></hr>
            <p className="copy">
                All rights reserved &copy; 2024 Sageroots International
            </p>
        </div>
    )
        ;
}

export default Footer;