import React from "react";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

export const Button = () => {
  return (
    <Bounce>
      <Link to="/about">
        <button class="btn">Know More</button>
      </Link>
    </Bounce>
  );
};

export default Button;
