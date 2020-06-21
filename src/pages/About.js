import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from "../images/img-me.jpeg";
import Pulse from "react-reveal/Pulse";

export const About = () => {
  return (
    <Pulse>
      <div className="about-container default">
        <h1 className="title">About me</h1>
        <div className="about-me">
          <p>
            I'm a 25 year old Junior Front-End Developer who is seeking for
            position in IT industry. I consider myself highly motivated
            individual, who likes challenges, change and the continuous process
            of learning and upgrading oneself. I’m a fast learner, able to pick
            up new skills and juggle different projects and roles. Excited for
            new opportunities, ready to work hard and always eager to learn more
            and improve as much as possible.
          </p>
        </div>
        <div className="image-holder">
          <img src={MyPhoto} alt="img-me" />
        </div>
      </div>
    </Pulse>
  );
};

export default About;
