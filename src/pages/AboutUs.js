import React from "react";

import "../styles/AboutUs.css";

import image from "../images/image6.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="aboutus">
        <div className="info">
          <h2>About Us</h2>
          <p>
            We are the special international charity fundation. We want to help
            every single kids around the whole world and that's our passion.
          </p>
          <button>Read More</button>
          <img src={image} alt="happy" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
