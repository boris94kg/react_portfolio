import React from "react";
import logo from "../images/LOGO.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="navigation">
        <ul className="nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
