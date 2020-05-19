import React from 'react';

function Contact() {
  return (
    <div>
      <section className="page-section bg-primary" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">Think I'm a good fit for your company?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (270) 752-0842</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:brich@codeninja.life">brich@codeninja.life</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
