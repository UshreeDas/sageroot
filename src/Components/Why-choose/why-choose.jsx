import React from "react";
import "./why-choose.css";
import education from "./education.svg";
import hand from "./hand shake.svg";
import security from "./security warning.svg";
import  coin from "./Coin.svg";
import  visa from "./Card.svg";

function Why () {
    return(

<div className="why-choose">
<h1 className="heading">Why Choose <span className="color">Sageroots International?</span></h1>

<div className="reasons">

<section className="group">
    <img src={education} alt="" className="img-one" />
    <p className="tag">Career Counseling</p>

</section>
<section className="group">
<img src={security} alt="" className="img-two"/>
    <p className="tag">Making Sure Your Security</p>
</section>
<section className="group">
<img src={coin} alt=""  className="img-three"/>
<p className="tag">Financial Planning</p>
</section>
<section className="group">
<img src={hand} alt="" className="img-five"/>
<p className="tag">University Connections</p>
</section>
<section className="group">
<img src={visa} alt="" className="img-four"/>
<p className="tag">Visa Assistance</p>
</section>


</div>

</div>

    )
}

export default Why;