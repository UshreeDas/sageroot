import React from "react";
import "./ourpartnerstext.css";

function Ourmissiontext({title}) {
    return (
        <div className="ourpartnerstext-container">
            <div className="quote-icon one"><i class="bi bi-quote"></i></div>
           
           <p className="our-partners-text">
               {title}
           </p>
     
       <div className="quote-icon two"><i class="bi bi-quote"></i></div>
        </div>
    )
}

export default Ourmissiontext;