import React from "react";
import navbar from "./Components/Nav-bar/nav-bar";
import {img1} from "./Components/logo.png";
import Frompage from "./Components/Form-part/form-part"; 
import Course from "./Components/Course/course";
import About from "./Components/About-us/about-us";

import './App.css';

function App() {
  return (
   <div>
    {/*<div className="header-part">*/}
    {/* <img src={img1} alt=""/>*/}
      <navbar />
      {/*</div>*/}
      {/*<Frompage />*/}
      {/*<Course />*/}
      {/*<About />*/}
      
    </div>
    

  );
}

export default App;
