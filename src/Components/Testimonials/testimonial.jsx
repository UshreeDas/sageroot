import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";


function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    

    const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect();
      // Check if the heading is in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true); // Set visible to true when in view
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
    return (
        <div className="feedback-part">
           <h1 
      className={`heading-text ${isVisible ? "visible" : ""}`} 
      ref={headingRef}
    >
      Here From Our <span className="catchy-text">Happy Students</span>
    </h1>
            <div  className={`testimonial-feedback ${isVisible ? "visible" : ""}`} 
      ref={headingRef}>
                <div className="testimonial-data">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="testimonial-card">
                                <div className="testimonial-img">
                                    <center>
                                        <img src={d.image} alt="client" className="client-img" />
                                    </center>
                                </div>
                                <div className="testimonial-info">
                                    <h5 className="name-client">{d.name} </h5>
                                    <span className="name-university">{d.university} </span>
                                    <span className="reviews">{d.review} </span>
                                    <h6 className="name-course">{d.course} </h6>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
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
    },
    {
        name: "Hari Vardhan Murusu",
        university: "East London university",
        course: "MSc computing",
        image: "./partners/Hari Vardhan Murusu.jpeg",
        review: "I am very happy with the service provided by the team. They helped me to get into the university of my choice and I am very grateful for that.",
    }
    
]

export default Testimonial;


