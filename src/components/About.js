import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">A little about me</h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">Insert bio here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
