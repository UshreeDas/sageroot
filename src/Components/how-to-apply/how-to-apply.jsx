import react from "react";
import "./how-to-apply.css";
import React from "react";
import Ourmissiontext from "../About-us/Members/Ourmissiontext";

function HowToApply() {
    return (
        <div className="apply-container">
            <div className='about-hero'>
                <div className="abt-text">
                    <h4><strong>Believe in Us, Because We Believe in You</strong></h4>
                    <p>Home > About us</p>
                </div>
            </div>
            <div className="apply-body">
                <div className="about-content-left">
                    <img src="/apply.jpg" alt="apply image" />
                </div>

                <div className="about-content-right">
                    <Ourmissiontext title={"About Us"} />
                    <p className="mission-para">
                        {/* Our mission is to provide the best education for our students. We
                        believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students.
                        We believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students.
                        We believe that education is the key to a successful future. We are
                        committed to providing the best education possible to our students. */}
                        We at Sageroots International is involved in producing consultancy services to
                        students who intend to study abroad and developing educational products. We offer end-to-end service for
                        aspiring candidates.Our team including our partners abroad are committed to be an integral part of your
                        success : Shaping your professional dreams to reality.
                    </p>
                </div>

            </div>
            {/* <div className="apply-conclusion">
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
            </div> */}
            <div className="serviceContent">
                <div className="ourServices">
                    <Ourmissiontext title={"Our Services"} />
                </div>
                <div className="services">
                    <li>1. Portfolio Mnagement</li>
                    <li>2. Financial Planning</li>
                    <li>3. Visa Assistance</li>
                    <li>4. Post Admission Guidance</li>
                    <li>5. Internship & Placement Assistance</li>
                </div>
            </div>
        </div >
    );
}

export default HowToApply;