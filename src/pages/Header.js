import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";
import Reveal from "react-reveal/Reveal";

const Header = () => {
  return (
    <Fragment>
      <Reveal>
        <header className="header-responsive">
          <div className="logo">
            <Link to="/" className="link">
              <img src={logo} alt="" className="logo-img" />
            </Link>
          </div>
          <div className="navigation">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Reveal>
    </Fragment>
  );
};

export default Header;
