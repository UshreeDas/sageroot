import React from "react";
import './University.css';
import UniversityList from "./UniversityList";

function University() {
    return (
        <div className="main-heading">
            <div className="heading">
                <h1 className="heading-text">Discover Top <span className="catchy-text">Universities</span></h1>
            </div>
            <span className="sub-heading">Explore our detailed breakdowns of the study abroad destinations around the
                world!</span>
            <UniversityList/>
            <a href="/university" className="view-link">
                <button className="view-btn">View More</button>
            </a>
        </div>

    );
}

export default University;