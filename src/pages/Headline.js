import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";

export const Headline = () => {
  return (
    <Bounce left cascade>
      <div className="headline">
        <span>
          Hi, my name is <span className="name">Boris</span>
        </span>
        <span>
          I'm a Junior Front<span className="dash">-</span>end Developer
        </span>
      </div>
    </Bounce>
  );
};

export default Headline;
