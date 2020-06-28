import React from "react";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

export const Button = ({ title }) => {
  return (
    <Bounce>
      <Link to="/about">
        <button className="btn project-btn">{title}</button>
      </Link>
    </Bounce>
  );
};

export default Button;
