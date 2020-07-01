import React from "react";
import { ExternalLink } from "react-external-link";
import Social from "../components/Social";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";

export const Contact = () => {
  return (
    <div className="contact-container">
      <Pulse>
        <h1 className="title">Contact</h1>
      </Pulse>
      <Jump>
        <h3 className="sub">Would you like to work with me?</h3>
        <ExternalLink href="mailto:boris94serbia@gmail.com">
          <button className="btn">Let's Talk</button>
        </ExternalLink>
        <Social />
      </Jump>
    </div>
  );
};

export default Contact;
