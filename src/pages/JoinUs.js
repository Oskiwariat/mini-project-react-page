import React from "react";

import "../styles/JoinUs.css";

import image1 from "../images/image1.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

const JoinUs = () => {
  return (
    <>
      <h1 className="special">Do you want to join us?</h1>
      <section className="joinus">
        <div className="first">
          <h1>Help</h1>
          <img src={image1} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            provident totam voluptas molestiae voluptates consectetur quam
            voluptate! Neque necessitatibus voluptatum suscipit provident sunt
            quibusdam, officiis minima natus laborum fuga quae?
          </p>
        </div>
        <div className="second">
          <h1>Study</h1>
          <img src={image3} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            provident totam voluptas molestiae voluptates consectetur quam
            voluptate! Neque necessitatibus voluptatum suscipit provident sunt
            quibusdam, officiis minima natus laborum fuga quae?
          </p>
        </div>
        <div className="third">
          <h1>Involvement</h1>
          <img src={image4} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            provident totam voluptas molestiae voluptates consectetur quam
            voluptate! Neque necessitatibus voluptatum suscipit provident sunt
            quibusdam, officiis minima natus laborum fuga quae?
          </p>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
