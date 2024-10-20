import React, {useState} from "react";
import UniversityList from "./university-section-list"; // Import the UniversityList component
import './university-section.css';

function UniversitySection() {
    const [selectedCountry, setSelectedCountry] = useState("All");

    return (
        <section className="university-section">
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
        </section>
    );
}

export default UniversitySection;