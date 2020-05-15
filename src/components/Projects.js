import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/img/portfolio/fullsize/1.jpg'
import img2 from '../assets/img/portfolio/fullsize/2.jpg'

function Projects() {
  return (
    <div>
      <section id="portfolio">
        <div>
          <div className="page-section bg-primary">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6 container">
                <NavLink className="portfolio-box" to="/project-show">
                  <img className="img-fluid" src={img1} alt="" />
                  <div className="portfolio-box-caption overlay">
                    <div className="project-category text-white-50 overlay-text">Category</div>
                    <div className="project-name overlay-text">Project Name</div>
                  </div></NavLink>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={img2}>
                  <img className="img-fluid" src={img2} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={img1}>
                  <img className="img-fluid" src={img1} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={img1}>
                  <img className="img-fluid" src={img1} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={img1}>
                  <img className="img-fluid" src={img1} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                  <img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
