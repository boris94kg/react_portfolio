import React from "react";
import { ExternalLink } from "react-external-link";

export const SingleProject = ({ name, imgSrc, desc, appUrl, gitRepoUrl }) => {
  return (
    <div className="project">
      <div className="card">
        <div className="card-image">
          <ExternalLink href={appUrl}>
            <img srcSet={imgSrc} alt="project-img" />
          </ExternalLink>
        </div>
      </div>
      <div className="project-desc">
        <h2 className="project-title">{name}</h2>
        <p className="subtitle">{desc}</p>
        <div className="buttons">
          <ExternalLink href={gitRepoUrl}>
            <button className="btn github">See Code</button>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
