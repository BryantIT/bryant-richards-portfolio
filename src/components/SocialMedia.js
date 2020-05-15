import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-dark">
        <div className="container">
          <NavLink to="/"><div className="pad fas fa-4x fab fa-facebook"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-github"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-linkedin"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-youtube"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-twitter"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-instagram"></div></NavLink>
          <NavLink to="/"><div className="pad fas fa-4x fab fa-slack"></div></NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
