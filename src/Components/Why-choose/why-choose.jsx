

import React from "react";
import "./why-choose.css";


function Why() {


    return (
        <div className="why-choose-us">
            <h1 className="heading-text">Why Choose <span className="catchy-text">Sageroots International?</span></h1>
            <div className="why-choose">
                <div className="why-choose-input">

                    {choose.map((item) => (
                        <div className="why-choose-content">
                            <div className="why-choose-img">
                                <center>
                                    <img src={item.image} alt="client" className="choose-img" />
                                </center>
                            </div>
                            <div className="why-choose-info">
                                <p className="why-choose-reason">{item.name} </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const choose = [
    {
        name: "Scholarship upto 50%",
        image: "./education.svg",

    },
    {
        name: "Making sure you stay right, and stay well",
        image: "./security warning.svg",

    },
    {
        name: "Courses starting at ₹8 Lakhs*",
        image: "./Coin.svg",

    },
    {
        name: "850+ University Partners",
        image: "./hand.png",

    },


]

export default Why;