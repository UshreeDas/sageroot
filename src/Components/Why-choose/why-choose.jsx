import React, { useEffect, useRef, useState } from "react";
import "./why-choose.css";

function Why() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".why-choose-content");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
    <div className="why-choose-us">
      <h1 
      className={`heading-text ${isVisible ? "visible" : ""}`} 
      ref={headingRef}
    >
      Why Choose <span className="catchy-text">Sageroots International</span>
    </h1>
      <div className="why-choose">
        <div className="why-choose-input">
          {choose.map((item, index) => (
            <div key={index} className="why-choose-content">
              <div className="why-choose-img">
                <center>
                  <img src={item.image} alt="client" className="choose-img" />
                </center>
              </div>
              <div className="why-choose-info">
                <p className="why-choose-reason">{item.name}</p>
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
    name: "Scholarship up to 50%",
    image: "./education.svg",
  },
  {
    name: "Making sure you stay right, and stay well",
    image: "./security warning.svg",
  },
  {
    name: "Courses starting at ₹8 Lakhs*",
    image: "./Coin.svg",
  },
  {
    name: "850+ University Partners",
    image: "./hand.png",
  },
];

export default Why;
