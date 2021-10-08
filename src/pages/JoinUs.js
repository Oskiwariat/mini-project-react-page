import React from "react";

import "../styles/JoinUs.css";

import image from "../images/happykids.jpg";

const JoinUs = () => {
  const handleStopRefresh = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="joinus">
        <div className="middlecontent">
          <nav>
            <ul>
              <li>
                <a onClick={handleStopRefresh} href="/">
                  Home
                </a>
              </li>
              <li>
                <a onClick={handleStopRefresh} href="/">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={handleStopRefresh} href="/">
                  Work
                </a>
              </li>
              <li>
                <a onClick={handleStopRefresh} href="/">
                  Info
                </a>
              </li>
              <li>
                <a onClick={handleStopRefresh} href="/">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
          <img src={image} alt="" />
          <div className="infosquare">
            <h1>Join Our Community</h1>
            <p>
              We are looking for very active and wonderful people who love to
              bring happiness and help other people. If you are such a person,
              go ahead and click the button below and join us!
            </p>
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
