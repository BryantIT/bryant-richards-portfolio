import React from 'react';
import { NavLink } from 'react-router-dom';

function Masthead() {
  return (
    <div>
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
              <h1 class="text-uppercase text-white font-weight-bold">Insert name here</h1>
              <hr class="divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 font-weight-light mb-5">insert headline here</p>
              <NavLink class="btn btn-primary btn-xl js-scroll-trigger" to="/about">Find Out More</NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Masthead;
