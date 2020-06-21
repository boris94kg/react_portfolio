import React from "react";
import bitBlog from "../images/projects_screenshot/bit_blog.png";
import { Link } from "react-router-dom";

export const SingleProject = () => {
  return (
    <div className="project">
      <div class="card">
        <div class="card-image">
          <img src={bitBlog} alt="project-img" />
        </div>
      </div>
      <div className="project-desc">
        <h2 class="project-title">Bit Blog</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure
          molestiae, cum inventore atque repellendus repudiandae optio ut
          aperiam rerum voluptates iste, eum soluta error nobis maxime dicta
          officiis. Rem nostrum cumque ratione voluptate, pariatur doloremque?
          Ab architecto hic optio odio, pariatur mollitia molestias quas
          possimus aspernatur eos soluta quia?
        </p>
        <div className="buttons">
          <Link to="/https://bit-people-project.netlify.app" target="_blank">
            <button class="btn live">See Live</button>
          </Link>
          <button className="btn github">Code</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
