import React from "react";
import { ExternalLink } from "react-external-link";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="title">Contact</h1>
      <h3 className="sub">Would you like to work with me?</h3>
      <ExternalLink href="mailto:boris94serbia@gmail.com">
        <buton className="btn">Let's Talk</buton>
      </ExternalLink>
    </div>
  );
};

export default Contact;
