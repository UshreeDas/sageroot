import React, {useState} from "react";
import "./footer.css";
import {Link} from "react-router-dom";

function Footer() {
    const [scrolling, setScrolling] = useState(false);
    return (
        <>
            <div className="footer">
                <div className="first-footer">
                    <img src="/Logo(Light).svg" alt="Logo" className="nav-brand"/>
                </div>
                <div className="footer-link-1">
                    <h3 className="footer-link-heading">Quick Links</h3>
                    <a href="/" className="footer-link-text">About Us</a>
                    <a href="/" className="footer-link-text">Contact Us</a>
                    <a href="/" className="footer-link-text">Privacy Policy</a>
                    <a href="/" className="footer-link-text">Terms & Conditions</a>
                </div>
                <div className="footer-link-2">
                    <h3 className="footer-link-heading">Follow Us</h3>
                    <a href="/" className="footer-link-text">Facebook</a>
                    <a href="/" className="footer-link-text">Instagram</a>
                    <a href="/" className="footer-link-text">Twitter</a>
                    <a href="/" className="footer-link-text">LinkedIn</a>
                </div>
                <div className="footer-link-3">
                    <h3 className="footer-link-heading">Top Universities</h3>
                    <a href="/" className="footer-link-text">Harvard University</a>
                    <a href="/" className="footer-link-text">Stanford University</a>
                    <a href="/" className="footer-link-text">MIT</a>
                    <a href="/" className="footer-link-text">Yale University</a>
                </div>
                <Link to="/contact">
                    <button className={`btn nav-btn ${scrolling ? 'on-scroll' : ''}`}>
                        Contact Us
                    </button>
                </Link>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 All Rights Reserved. Developed by Sageroots</p>
            </div>
        </>
    );
}

export default Footer;