import React from "react";
import "./MainPage.css";
import University from "../University/University";
import Why from "../Why-choose/why-choose";
import About from "../About-us/about-us";
import Feedback from "../Feedback/feedback";

function Main() {
    return (
        <div>
            <div className="Main">

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./John-Hopkins-Business-School.jpg" className="first-slide" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./cambridge.jpeg "
      alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./CNN BUSINESS.jpg" className="third-slide" alt="" />
    </div>
  </div>
</div>

            </div>
            <University/>
            <Why/>
            <Feedback/>
            <About/>
        </div>
    )
}

export default Main;