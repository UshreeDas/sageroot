import React from "react";
import "./feedback.css";


function Feedback() {
    return (
      <div className="testimonial">
        <div className="feedback">

<div className="review">
 
<p className="client-feedback">
Hear From Our Happy Clients!
</p>


</div>

          <div className="client">
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="data-list">
            <div className="data">
            <div class="card" >
             <div className="client-img">
  <img class="card-img-top" src="./jibon mondal.jpg" alt="Card image cap"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Jibon Mondal</h5>
    <h5 class="card-text">University of technology sydney (UTS)</h5>
    <a href="#" class="btn btn-primary">Master of Engineering</a>
  </div>
</div>
           
            </div>
            <div className="data">
            <div class="card" >
            <div className="client-img">
  <img class="card-img-top" src="./mohammad ali.jpg" alt="Card image cap"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Mohammad Ali
    </h5>
    <p class="card-text">University of Greenwich 
    </p>
    <a href="#" class="btn btn-primary">MBA International Business
    </a>
  </div>
</div>
           
           
            </div>
        </div>
      
    </div>
    <div class="carousel-item">
    <div className="data-list">
            <div className="data">
            <div class="card" >
            <div className="client-img">
  <img class="card-img-top" src="./mohammad shabaz ghani.jpg" alt="Card image cap"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Mohammad Shabaz Ghani
    </h5>
    <p class="card-text">University of Greenwich 
    </p>
    <a href="#" class="btn btn-primary">MBA International Business
    </a>
  </div>
</div>
          
            </div>
            <div className="data">
            <div class="card" >
            <div className="client-img">
  <img class="card-img-top" src="./chandrakanth kammari .jpg" alt="Card image cap"/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Chandrakanth Kammari 
    </h5>
    <p class="card-text">University of Greenwich 
    </p>
    <a href="#" class="btn btn-primary">MSc pharmaceutical sciences
    </a>
  </div>
</div>
               
          
           
            </div>
        </div>
    </div>
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
           </div>
           </div>

    )
}

export default Feedback;