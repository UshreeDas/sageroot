import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="first-footer">
                    <center><img src="/Logo(Light).svg" alt="Logo" className="nav-brand"/></center>
                </div>
                <div className="footer-link-1">
                    <h3 className="footer-link-heading">Quick Links</h3>

                    <Link to="/about" className="footer-link-text">About Partners</Link>
                    <Link to="/contact" className="footer-link-text">Contact Us</Link>
                    <Link to="/university" className="footer-link-text">University Partners</Link>
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
                    <a href="https://www.hbs.edu/" className="footer-link-text">Harvard University</a>
                    <a href="https://www.stanford.edu/" className="footer-link-text">Stanford University</a>
                    <a href="https://www.mit.edu/" className="footer-link-text">MIT</a>
                    <a href="https://www.yale.edu/" className="footer-link-text">Yale University</a>
                </div>
                <div className="footer-contact-details">
                    <h3 className="footer-link-heading">Contact Us</h3>
                    <p className="footer-link-text">Email: info.sageroots@gmail.com</p>
                    <p className="footer-link-text">Phone: +91 62917 99937</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 All Rights Reserved. Developed by Sageroots</p>
            </div>
        </>
    );
}

export default Footer;