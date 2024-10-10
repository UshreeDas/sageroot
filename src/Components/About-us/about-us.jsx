import React from "react";
import "./about-us.css";


function About() {


    return (

        <div className="about">
            <div className="heading">
                <h1>Sageroot<span>Give Wings to Your Dreams</span></h1></div>
            <p className="para">
                We will guide and support you by offering the entire spectrum of services designed to
                make the process of studying abroad smoother.We believe that education should be accessible to everyone.
                Our
                competitive pricing and various free resources make it easy to invest in your learning without breaking
                the bank.Experts
                help you identify suitable courses, universities, and countries based on your academic background,
                interests, and career goals.
                Your privacy and security are our top priorities. With our platform, learning is at your fingertips,
                anytime and anywhere.

            </p>
            <br/>

            <p className="para facilities">
                Our Facilities

            </p>
            <br/>

            <ul className="list">

                <br/>
                <li className="list-topic"><span className="highlight">University and Course Selection:</span> All you
                    need to know about different universities and programs, that align
                    with your aspirations, budget, and eligibility.
                </li>

                <li className="list-topic"><span className="highlight">Admission Guidance:</span> We will assist in the
                    application process,
                    including preparing and reviewing documents.
                </li>

                <li className="list-topic"><span className="highlight">Visa Assistance:</span> Experts will guide you
                    through the visa application process, ensuring all documents are in order and
                    increasing the likelihood of visa approval.
                </li>

                <li className="list-topic"><span className="highlight">Test Preparation:</span> We offer coaching for
                    standardized tests like IELTS and TOEFL: often a prerequisite for admission
                    to foreign universities.
                </li>

                <li className="list-topic"><span className="highlight">Financial Planning:</span> We will provide advice
                    on managing expenses and exploring student
                    loan options to fund your study abroad.
                </li>

                <li className="list-topic"><span className="highlight">Pre-Departure Support: </span>We will guide you
                    on accommodation, travel arrangements, insurance, and cultural orientation to enable you
                    to transition smoothly to life in a foreign country.
                </li>

                <li className="list-topic"><span className="highlight">Post-Landing Services:</span> Our overseas
                    partners will support you after arrival, including help with local registration, finding
                    accommodation,
                    or networking opportunities.
                </li>
            </ul>
        </div>
    )
}

export default About;