import React from "react";
import robot from "../assets/robot.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <h1>Future of Robotics</h1>

        <p>
          Robotics is transforming industries using automation
          and artificial intelligence.
        </p>

        <button>Explore Technology</button>
      </div>

      <img src={robot} alt="robot" className="hero-img" />

    </section>
  );
}

export default Hero;