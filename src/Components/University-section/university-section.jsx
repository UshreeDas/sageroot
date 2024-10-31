import React, {useState} from "react";
import UniversityList from "./university-section-list";
import { ButtonGroup, Button } from "@material-tailwind/react";
import './university-section.css';

function UniversitySection() {
    const [selectedCountry, setSelectedCountry] = useState("All");

    return (
        <div className="university-container">
            <div className='about-hero'>
            <div className="abt-text">
                <h4><strong>Connected University</strong></h4>
                <p>Home > Connected University</p>
                </div>
            </div>
            <div className="university-section">
                <nav>

                    <ul className="university-country">
                        {["All", "UK", "US", "Canada", "Australia", "Germany"].map(country => (
                            <li
                                key={country}
                                className="university-country-names"
                                onClick={() => setSelectedCountry(country)}
                            >
                                {country}
                            </li>
                        ))}
                    </ul>
                </nav>
                <UniversityList selectedCountry={selectedCountry}/>
            </div>
        </div>
    );
}

export default UniversitySection;