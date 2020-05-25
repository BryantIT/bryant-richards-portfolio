import React from 'react';
import { Helmet } from 'react-helmet'

function OtherPublications({ profile }) {

  return (
    <div>
      <Helmet>
        <title>Bryant Richards Publications</title>
        <meta name="description"
          content="Web Developer Bryant Richards publications including youtube" />
      </Helmet>
      <section className="page-section bg-primary" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Other Publications</h2>
          <hr className="divider my-4" />
          <div className="row">
            {profile.publications.map(p => (
            <div key ={p.id} className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <h3 className="h4 mb-2">{p.name}</h3>
                <p className="text-muted mb-0">{p.summary.substr(0,50)}
                <a href={p.website} target="_blank" rel="noopener noreferrer">...</a></p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}


  export default OtherPublications;
