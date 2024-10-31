import React from "react";
import "./MainPage.css";
import Why from "../Why-choose/why-choose";
import Testimonial from "../Testimonials/testimonial";

function Main() {


    return (

        <div className="main">
            <div className="main-page">
                <div className="main-text">
                    <h1 className="main-head"> Gateway to World-Class Education</h1>
                    <p className="main-subhead">Where Knowledge Meets Opportunity</p>
                </div>
            </div>
            <Why/>
            <Testimonial/>
        </div>
    );
}

export default Main;
