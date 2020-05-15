import React from 'react';
import { NavLink } from 'react-router-dom';

function Skills() {
  return (
    <div>
      <section className="page-section bg-primary" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Skills</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 className="h4 mb-2">Ruby on Rails</h3>
                <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fab fa-js text-primary mb-4"></i>
                <h3 className="h4 mb-2">JavaScript</h3>
                <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                  <i className="fas fa-4x fab fa-react text-primary mb-4"></i>
                  <h3 className="h4 mb-2">ReactJS</h3>
                  <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
