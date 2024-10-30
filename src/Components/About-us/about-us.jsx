import React from "react";
import "./about-us.css";
import Members from "./Members/Members";


function About() {


    return (
        <div className="about-container">
            <div className='about-hero'>
                <h4><strong>About Partners</strong></h4>
                <p>Home > About Partners</p>
            </div>
            <div className="about-content">
                <div className="about-content-left">
                    <img src="https://github.com/DMMPrice/sageroot-images/blob/master/partners/About-Us.jpg?raw=true"/>
                </div>
                <div className="about-content-right">
                    <h4>Our Mission</h4>
                    <p>Our mission is to provide the best education for our students. We
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