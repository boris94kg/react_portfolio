import React from "react";
import SingleProject from "../components/SingleProject";
import bitBlog from "../images/projects_screenshot/bit_blog.png";
import bitPeople from "../images/projects_screenshot/bit_people.png";
import bitFinalProject from "../images/projects_screenshot/bit_project3.png";
import bitBootstrap from "../images/projects_screenshot/bootstrap_project.png";
import portfolio_v1 from "../images/projects_screenshot/portfolio.png";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Projects page</h1>
      <SingleProject
        name="Bit Blog"
        imgSrc={bitBlog}
        desc="Ssadsadsadsadsadsa"
        appUrl="https://bit-authors-project.netlify.app/"
        gitRepoUrl="https://github.com/boris94kg/Bit-Blog-Project"
      />
      <SingleProject
        name="Bit People"
        imgSrc={bitPeople}
        desc="somedesc about project"
        appUrl="https://bit-people-project.netlify.app/"
        gitRepoUrl="https://github.com/boris94kg/Bit-People-Project"
      />
      <SingleProject
        name="Bit Project"
        imgSrc={bitFinalProject}
        desc="Bit Social App"
        appUrl="https://bit-commited-project.netlify.app/register"
        gitRepoUrl="https://github.com/boris94kg/Bit-CommitEd-Project"
      />
      <SingleProject
        name="Boostrap Project"
        imgSrc={bitBootstrap}
        desc="Practice bootstrap system"
        appUrl="https://bootstrap-sass-project.netlify.app/"
        gitRepoUrl="https://github.com/boris94kg/Bootstrap-Project"
      />
      <SingleProject
        name="Portfolio v1"
        imgSrc={portfolio_v1}
        desc="porfolio project"
        appUrl="https://borist-portfolio.netlify.app/"
        gitRepoUrl="https://github.com/boris94kg/Portfolio-Website"
      />
    </div>
  );
};
export default Projects;
