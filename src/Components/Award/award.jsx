import React, { useEffect, useRef, useState } from "react";
import "./award.css";

function Award() {

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
    <div className="award-portion">
     
     
    <div className="award-container">
    <div className="award-text">
   <p className="award-heading">
      Trusted Business Partner Award
      </p>
      <p className="award-subheading">
      Enhances credibility and trust</p>
        <p className="award-caption">
          Recognized for excellence in UK agent and counsellor training by the British Council.
          A testament to dedication and professional growth!
        </p>
      </div>
      <div className="certificate-img">
        <img src="Certification Award.jpg" alt="Award Certificate" className="award-img" />
      </div>
      </div>
    </div>

  );
}

export default Award;