import React from "react";
import "./MainPage.css";
import University from "../University/University";
import Why from "../Why-choose/why-choose";
import About from "../About-us/about-us";

function Main() {
    return (
        <div>
            <div className="Main"></div>
            <University/>
            <Why/>
            <About/>
        </div>
    )
}

export default Main;