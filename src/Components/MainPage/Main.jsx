import React from "react";
import "./MainPage.css";
import University from "../University/University";
import Why from "../Why-choose/why-choose";
import Testimonial from "../Testimonials/testimonial";

function Main() {
  return (
    <div>
      <div className="Main">
        {/* Bootstrap Carousel */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
          data-pause="false"
        >
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <img
                className="d-block w-100 carousel-img"
                src="./John-Hopkins-Business-School.jpg"
                alt="First slide"
              />
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel-img"
                src="./cambridge.jpeg"
                alt="Second slide"
              />
            </div>

            {/* Third Slide */}
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel-img"
                src="./photo-1617297296495-4af2290c2b84.jpeg"
                alt="Third slide"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Other Components */}
      <University />
      <Why />
      <Testimonial />
    </div>
  );
}

export default Main;
