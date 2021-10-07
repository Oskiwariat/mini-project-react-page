import React from "react";

import bgcPhoto from "../images/bgcPhoto.jpg";

import Navigation from "./Navigation";

import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <section className="mainpage">
        <header className="welcome">
          <Navigation />
          <div className="fundation">
            <h1>International Charity fundation</h1>
            <p>We love help</p>
          </div>
          <img src={bgcPhoto} alt="backgroundPhoto" />
          <div className="about">
            <h2>
              School in Zambia is almost finished. <strong>Hurra!</strong>
            </h2>
            <button>See all projects</button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
