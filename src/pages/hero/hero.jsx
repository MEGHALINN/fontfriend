import React from "react";
import logo from "../../images/fontlogo.png"
import img from "../../images/font-friend-high-resolution-logo.png"
import './hero.css'

export default function hero()  {
    return(
      <div className="main">
        <div className="hero">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt=""></img>
          </div>
        </div>
        <div className="hero-cont">
          <div className="hero-left">
            <h1>Welcome to Font Friend</h1>
            <h2>Breaking Down Barriers</h2>
  
           
              <a href="/login">Let's Go</a>
         
          </div>
          <div className="hero-right">
            <img src={img} alt=""></img>
          </div>
        </div>
      </div>
      </div>
    );
}