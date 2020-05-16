import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/img/portfolio/fullsize/1.jpg'
import img2 from '../assets/img/portfolio/fullsize/2.jpg'

const Projects = ({ profile }) => {
  console.log(profile.projects)
  return (
    <div>
      <section id="portfolio">
        <div>
            <div className="page-section bg-primary">
              <div className="row no-gutters">
                {profile.projects.map(p => (
                <div className="col-lg-4 col-sm-6 container">
                  <NavLink className="portfolio-box" to="/project-show">
                    <img className="img-fluid" src={p.images.map(i => i.resolutions.desktop.url)} alt="" />
                    <div className="portfolio-box-caption overlay">
                      <div className="project-name overlay-text">{p.name}</div>
                      <div className="project-category text-white-50 overlay-text">{p.primaryLanguage}</div>
                    </div></NavLink>
                  </div>
                ))}
                </div>
              </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
