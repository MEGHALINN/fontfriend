import React from "react";
import logo from "../../images/fontlogo.png"
import img from "../../images/font-friend-high-resolution-logo-black-transparent.png"
import './hero.css'

export default function hero()  {
    return(
      <>
      <section className="main" id="main">
        <div className="nav-left">
            <img src={logo} alt=""></img>
          </div>
        <div className="hero">
        
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
      </section>
      <section className="about" id="about">
      <div className="ABOUT">
            
              <div className="hero-cont1">
                <div className="hero-left-about">
                    <h1>ABOUT</h1>
                    <h3>
                    <h2>Introduction</h2><br/>
Welcome to Font Friend, a pioneering project dedicated to revolutionizing the reading experience for dyslexic individuals. 
Our initiative combines innovative technologies with personalized learning approaches to create a supportive and engaging
 platform that empowers dyslexic readers to overcome challenges and embrace the joy of learning.<br/><br/>
<h2>Our Mission</h2><br/>
At Font Friend, our mission is simple yet profound: to empower dyslexic individuals by providing them with the tools and 
resources they need to succeed in their reading journey. We believe that every individual, regardless of their learning 
differences, deserves access to quality education and opportunities for personal growth.<br/><br/>

</h3>
                   
                </div>
              </div>
            </div>

      </section>
      </>
    );
}