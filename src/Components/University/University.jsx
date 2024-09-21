import React from "react";
import { ReactComponent as LibraryIcon } from './library.svg'; // Adjust the path if necessary
import './University.css';
import UniversityList from "./UniversityList";

function University() {
    return (
        <div className="main-heading">
            <div className="heading">
                <h1>Discover Top <span>Universities</span></h1>
                <LibraryIcon />
            </div>
            <p>Explore our detailed breakdowns of the study abroad destinations around the world!</p>
            <UniversityList />
        </div>
    );
}

export default University;