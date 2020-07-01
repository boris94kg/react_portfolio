import React, { useState } from "react";
import SingleProject from "../components/SingleProject";
import bitBlog from "../images/projects_screenshot/bit_blog.png";
import bitPeople from "../images/projects_screenshot/bit_people.png";
import bitFinalProject from "../images/projects_screenshot/bit_project3.png";
import bitBootstrap from "../images/projects_screenshot/bootstrap_project.png";
import portfolio_v1 from "../images/projects_screenshot/portfolio.png";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";

export const Projects = () => {
  return (
    <div className="projects-container">
      <Pulse>
        <h1 className="title">Projects page</h1>
      </Pulse>
      <Slide left>
        <SingleProject
          name="Bit Blog"
          imgSrc={bitBlog}
          desc="Simple React App where user can see posts and authors. Click on single post user gets all posts from one author. Click on author user gets information about that author."
          appUrl="https://bit-authors-project.netlify.app/"
          gitRepoUrl="https://github.com/boris94kg/Bit-Blog-Project"
        />
      </Slide>
      <Slide right>
        <SingleProject
          name="Bit Blog"
          imgSrc={bitBlog}
          desc="Simple React App where user can see posts and authors. Click on single post user gets all posts from one author. Click on author user gets information about that author."
          appUrl="https://bit-authors-project.netlify.app/"
          gitRepoUrl="https://github.com/boris94kg/Bit-Blog-Project"
        />
      </Slide>
      <Slide left>
        <SingleProject
          name="Bit People"
          imgSrc={bitPeople}
          desc="Simple React App where user can search and see users as a grid or simple list and can refresh the page."
          appUrl="https://bit-people-project.netlify.app/"
          gitRepoUrl="https://github.com/boris94kg/Bit-People-Project"
        />
      </Slide>
      <Slide right>
        <SingleProject
          name="Bit Social App"
          imgSrc={bitFinalProject}
          desc="Application by CommitEdTeam
        Simple Facebook-inspired social network app, written as a final project for the Front-end course.
        The app supports registering/logging in, a profile search function, image and video posts, number of comments and posts of some user.
        The central page is the feed, which shows all posts.
        The design is fully responsive and based on Materialize CSS."
          appUrl="https://bit-commited-project.netlify.app/register"
          gitRepoUrl="https://github.com/boris94kg/Bit-CommitEd-Project"
        />
      </Slide>
      <Slide left>
        <SingleProject
          name="Boostrap Project"
          imgSrc={bitBootstrap}
          desc="Simple and responsive Bootstrap/Sass project where I got specification and build all from scratch."
          appUrl="https://bootstrap-sass-project.netlify.app/"
          gitRepoUrl="https://github.com/boris94kg/Bootstrap-Project"
        />
      </Slide>
      <Slide right>
        <SingleProject
          name="Portfolio v1"
          imgSrc={portfolio_v1}
          desc="My old portfolio website where you can learn more about me and the projects that I've made so far! You're currently on a newer version on my portfolio"
          appUrl="https://borist-portfolio.netlify.app/"
          gitRepoUrl="https://github.com/boris94kg/Portfolio-Website"
        />
      </Slide>
    </div>
  );
};
export default Projects;
