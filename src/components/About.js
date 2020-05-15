import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">A little about me</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">Insert bio here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
