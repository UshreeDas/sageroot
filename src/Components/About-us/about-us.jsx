import React from "react";
import "./about-us.css";
import Members from "./Members/Members";
import Ourmissiontext from "./Members/Ourmissiontext";


function About() {

    return (
        <div className="about-container">
            <div className='about-hero'>
                <div className="abt-text">
                <h4><strong>About Partners</strong></h4>
                <p>Home > About Partners</p>
                </div>
            </div>
            <div className="about-content">
                <div className="about-content-left">
                    <img src="./partners/About-Us.jpg"/>
                </div>
                
                <div className="about-content-right">
                    <Ourmissiontext/>
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
            <Members/>
        </div>
    )
}

export default About;