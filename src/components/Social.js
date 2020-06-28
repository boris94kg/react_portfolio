import React from "react";
import { ExternalLink } from "react-external-link";

const Social = () => {
  return (
    <div className="social-container">
      <ExternalLink
        href="https://www.linkedin.com/in/boris-trajkovic-02101994/"
        className="social-link"
      >
        <i className="fab fa-linkedin-in"></i>
      </ExternalLink>
      <ExternalLink href="https://github.com/boris94kg" className="social-link">
        <i className="fab fa-github github"></i>
      </ExternalLink>
    </div>
  );
};

export default Social;
