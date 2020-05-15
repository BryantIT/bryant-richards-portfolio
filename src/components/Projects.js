import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/img/portfolio/fullsize/1.jpg'
import img2 from '../assets/img/portfolio/fullsize/2.jpg'

function Projects() {
  return (
    <div>
      <section id="portfolio">
        <div>
          <div className="page-section bg-dark">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={img1}>
                  <img className="img-fluid" src={img1} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
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
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                  <img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg">
                  <img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div></a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg">
                  <img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
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
