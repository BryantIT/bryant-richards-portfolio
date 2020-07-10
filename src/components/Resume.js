import React from 'react';
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">My Resume</h2>
              <hr className="divider light my-4" />
              <a className="text-white-50 mb-4" href="https://gitconnected.com/bryantit/resume"
                target="_blank" rel="noopener noreferrer" download>Click here to view resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
