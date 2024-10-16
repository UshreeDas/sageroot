import React from "react";
import "./MainPage.css";
import University from "../University/University";
import Why from "../Why-choose/why-choose";
import Testimonial from "../Testimonials/testimonial";
function Main() {
  return (
    <div>
      <div className="Main">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="2000" data-pause="false" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="./John-Hopkins-Business-School.jpg" alt="First slide" className="carousel-img" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./cambridge.jpeg" alt="Second slide" className="carousel-img" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./pexels-pixabay-159490.jpg" alt="Third slide" className="carousel-img" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <University />
      <Why />
      <Testimonial />
    </div>
  )
}

export default Main;