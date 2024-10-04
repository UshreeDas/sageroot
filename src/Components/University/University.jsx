import React from "react";
import './University.css';
import UniversityList from "./UniversityList";

function University() {
    return (
        <div className="main-heading">
            <div className="heading">
                <h1>Discover Top <span>Universities</span></h1>
                <img src="/library.svg" alt="library"/>
            </div>
            <p className="sub-heading">Explore our detailed breakdowns of the study abroad destinations around the
                world!</p>
            <UniversityList/>
        </div>
    );
}

export default University;