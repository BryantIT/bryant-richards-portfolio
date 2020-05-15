import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item"><NavLink to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink to="/skills">Skills</NavLink></li>
              <li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li className="nav-item"><NavLink to="/resume">Resume</NavLink></li>
              <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
