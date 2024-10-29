import React from "react";
import "./MainPage.css";
// import University from "../University/University";
import Why from "../Why-choose/why-choose";
import Testimonial from "../Testimonials/testimonial";

function Main() {
  return (
  
      <div className="Main">
      
        {/* <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
          data-pause="false"
        >
          <div className="carousel-inner">
        
            <div className="carousel-item active">
              <img
                className="d-block w-100 carousel-img"
                src="./John-Hopkins-Business-School.jpg"
                alt="First slide"
              />
            </div>

         
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel-img"
                src="./cambridge.jpeg"
                alt="Second slide"
              />
            </div>

        
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel-img"
                src="./photo-1617297296495-4af2290c2b84.jpeg"
                alt="Third slide"
              />
            </div>
          </div>

      
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
        </div> */}
        <div className="main-page">
<div className="main-text">
<h1 className="main-head"> Gateway to World-Class Education</h1>
<p className="main-subhead">"Where Knowledge Meets Opportunity"</p>
</div>
  </div>


      {/* Other Components */}
      {/* <University /> */}
      <Why />
      <Testimonial />
    </div>
  );
}

export default Main;
