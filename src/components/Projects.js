import React from 'react';
import { Helmet } from 'react-helmet'

const Projects = ({ profile }) => {
  return (
    <div>
      <Helmet>
        <title>Bryant Richards Projects</title>
        <meta name="description"
          content="Web Developer Bryant Richards web developer projects" />
      </Helmet>
      <section id="portfolio">
        <div>
            <div className="page-section bg-primary container-fluid">
              <div className="row no-gutters">
                {profile.projects.map(p => (
                <div key={p.name} className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href={p.githubUrl}>
                    <img className="img-fluid" src={p.images.map(i => i.resolutions.desktop.url)} alt={p.name} />
                    <div className="portfolio-box-caption overlay">
                      <div className="project-name overlay-text">{p.name}</div>
                      <div className="project-category text-white-50 overlay-text">{p.primaryLanguage}</div>
                    </div></a>
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
