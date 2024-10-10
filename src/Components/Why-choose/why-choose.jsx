import React from "react";
import "./why-choose.css";

function Why() {
    return (

        <div className="main-heading">
            <div className="heading">
                <h1>Why Choose<span>Sageroots International?</span></h1></div>

            <div className="reasons">

                <section className="group">
                    <img src="/education.svg" alt="" className="img-one"/>
                    <p className="tag">Career Counseling</p>

                </section>
                <section className="group">
                    <img src="/security warning.svg" alt="" className="img-two"/>
                    <p className="tag">Making Sure Your Security</p>
                </section>
                <section className="group">
                    <img src="/Coin.svg" alt="" className="img-three"/>
                    <p className="tag">Financial Planning</p>
                </section>
                <section className="group">
                    <img src="/hand shake.svg" alt="" className="img-five"/>
                    <p className="tag">University Connections</p>
                </section>
                <section className="group">
                    <img src="/Card.svg" alt="" className="img-four"/>
                    <p className="tag">Visa Assistance</p>
                </section>
            </div>
        </div>

    )
}

export default Why;