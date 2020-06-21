import React from "react";
import Bounce from "react-reveal/Bounce";
import Button from "./Button";

export const Headline = () => {
  return (
    <Bounce left cascade>
      <div className="headline">
        <span>
          Hi, my name is <span className="name">Boris</span>
        </span>
        <span>
          I'm a Junior Front<span className="dash">-</span>end Developer.
        </span>
        <Button title="Know More" />
      </div>
    </Bounce>
  );
};

export default Headline;
