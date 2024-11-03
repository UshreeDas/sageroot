import react from "react";
import "./how-to-apply.css";
import React from "react";
import Ourmissiontext from "../About-us/Members/Ourmissiontext";

function HowToApply() {
    return (
        <div className="apply-container">
            <div className='about-hero'>
                <div className="abt-text">
                    <h4><strong>How to Apply</strong></h4>
                    <p>Home > How to Apply</p>
                </div>
            </div>
            <div className="apply-body">
                <div className="about-content-left">
                    <img src="/apply.jpg" alt="apply image" />
                </div>

                <div className="about-content-right">
                    <Ourmissiontext title={"How to Apply"} />
                    <p className="mission-para">Our mission is to provide the best education for our students. We
                        believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students.
                        We believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students.
                        We believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students.
                    </p>
                </div>

            </div>
            <div className="apply-conclusion">
                <p className="our-partners-text">Documents Required for submission</p>
                <ul className="apply-conclusion-ul-point">
                    <li>Passport</li>
                    <li>CV</li>
                    <li>English Language</li>
                    <li>Resume</li>
                    <li>Passport</li>
                    <li>English Proficiency Test Result / MOI (selected institutes)</li>
                    <li>SCC Certificate</li>
                    <li>SSC Transcript</li>
                    <li>HSC Certificate</li>
                    <li>HSC Transcript</li>
                    <li>Personal Statement / SOP</li>
                    <li>1 Letter of Recommendation (Academic)</li>
                    <li>1 Letter of Recommendation (Academic + Professional)</li>
                    <li>Bachelor Certificate</li>
                    <li>Bachelor Transcript</li>
                    <li>Work Experience letter</li>
                    <li>Professional Experience letter</li>
                    <li>Internship letter</li>
                    <li>Other Qualification</li>
                </ul>
                <div className="apply-conclusion-last-text">Mail the documents at <strong>info.sageroots@gmail.com</strong></div>
            </div>
        </div>
    );
}

export default HowToApply;