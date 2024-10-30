import React, {useState} from "react";
import "./footer.css";
import {Link} from "react-router-dom";

function Footer() {
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
                <div className="location">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.041807736009!2d88.39946977522276!3d22.502614535531904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273fb5271a57f%3A0x536757469ececd6e!2sKidZee%20Madurdaha!5e0!3m2!1sen!2sin!4v1729448415835!5m2!1sen!2sin"
                            width="auto"
                            height="200"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 All Rights Reserved. Developed by Sageroots</p>
            </div>
        </>
    );
}

export default Footer;