import React from "react";
import "./category.css";
import business from "./Business.svg";
import health from "./Medical Equipment.svg";
import engineering from "./png-transparent-computer-icons-settings-white-text-desktop-wallpaper-thumbnail-removebg-preview 1.svg";
import management from "./Management.svg";
import economic from "./Graph.svg";
import literature from "./pngtree-book-line-black-icon.-png-image_3746347-removebg-preview 1.svg";
import philosopy from "./image 14.svg";
import humanities from "./man.svg";

function Category () {
    return(

<div className="catagory">
<h1 className="heading">Browse programs by <span className="color">Category</span></h1>
<br/>
<section className="catagory-name">
<button className="view" >View all</button>
<br/>
<br/>

<div className="catagory-portion-one">
<section className="box-one">
    <button className="one">
<a href="/"  > 

<img src={business}  className="business" alt=" "/>
<p className="tag-line">Business</p>
</a>
</button>
</section>
<section className="box-two">
<button className="two">
<a href="/"  > 

<img src={health} className="health" alt=""/>
<p className="tag-line">Health Studies</p>
</a>
</button>
</section>
<section className="box-three">
<button className="three">
<a href="/"  > 

<img src={engineering} className="engineering" alt="" />
<p className="tag-line"> Engineering</p>
</a>
</button>
</section>
<section className="box-four">
<button className="four">
<a href="/"  > 

<img src={management} className="management" alt="" />
<p className="tag-line">Managemrnt</p>
</a>
</button>
</section>
</div>

<section className="catagory-portion-two">
<section className="box-five">
    <button className="five">
<a href="/"  > 

<img src={economic} alt="" className="economic" />
<p className="tag-line">Economic Studies</p>
</a>
</button>
</section>
<section className="box-six">
<button className="six">
<a href="/"  > 

<img src={literature} className="literature" alt="" />
<p className="tag-line">Literature</p>
</a>
</button>
</section>
<section  className="box-seven">
<button className="seven">
<a href="/"  > 

<img src={philosopy} className="philosopy" alt="" />
<p className="tag-line">Philosopy</p>
</a>
</button>
</section>
<section className="box-eight">
<button className="eight">
<a href="/"  > 

<img src={humanities}  className="humanities" alt="" />
<p className="tag-line">Humanities</p>
</a>
</button>
</section>


</section>
</section>

</div>

    )
}

export default Category;