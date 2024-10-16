import React from "react";
import './University.css';
import UniversityList from "./UniversityList";

function University() {
    return (
        <div className="main-heading">
            <div className="heading">
                <h1 className="heading-text">Discover Top <span className="catchy-text">Universities</span></h1>
                <img src="./Group.svg" alt="library" className="book-img"/>
            </div>
            <span className="sub-heading">Explore our detailed breakdowns of the study abroad destinations around the
                world!</span>
            <UniversityList/>
        </div>
    );
}

export default University;