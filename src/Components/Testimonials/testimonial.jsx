import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";


function Testimonial() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,           
    autoplaySpeed: 3000,
      };
    return (
        <div className="testimonial-feedback">

<div className="taxt">
<p className="client-feedback">
Hear From Our Happy Clients!
</p>
</div>

            <div className="testimonial-data">
            <Slider {...settings}>
{data.map((d) => (
    <div className="testimonial-card">
<div className="testimonial-img">
<center>
<img src={d.image} alt="client" className="client-img"/>
</center>
</div>
<div className="testimonial-info">
<p className="name-client">{d.name} </p>
<p className="name-university">{d.university} </p>
<p className="name-course">{d.course} </p>
</div>
</div>
        ))}
  </Slider>
</div>
</div>
);
}

const data = [
    {
        name: "Jibon Mondal",
        university: "University of technology sydney (UTS)",
        course: "Master of Engineering",
        image: "./jibon mondal.jpg",
        review: "I am very happy with the service provided by the team. They helped me to get into the university of my choice and I am very grateful for that.",
    },
    {
        name: "Mohammad Ali",
        university: "University of Greenwich",
        course: "MBA International Business",
        image: "./mohammad ali.jpg",
         review: "I am very happy with the service provided by the team. They helped me to get into the university of my choice and I am very grateful for that.",
    },
    {
        name: "Mohammad Shabaz Ghani",
        university: "University of Greenwich",
        course: "MBA International Business",
        image: "./mohammad shabaz ghani.jpg",
         review: "I am very happy with the service provided by the team. They helped me to get into the university of my choice and I am very grateful for that.",
    },
    {
        name: "Chandrakanth Kammari",
        university: "University of Greenwich",
        course: "MSc Pharmaceutical Sciences",
        image: "./chandrakanth kammari .jpg",
         review: "I am very happy with the service provided by the team. They helped me to get into the university of my choice and I am very grateful for that.",
    }
]

export default Testimonial;


