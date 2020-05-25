import React from 'react';
import { Helmet } from 'react-helmet'

function Blog({ blog }) {

  return (
    <div>
      <Helmet>
        <title>Bryant Richards Blog</title>
        <meta name="description"
          content="Web Developer Bryant Richards blog" />
      </Helmet>
      <section className="page-section bg-primary" id="services">
        <div className="container">
          <h2 className="text-center mt-0">My Blog</h2>
          <hr className="divider my-4" />
          <div className="row">
            {blog.items.map(b => (
            <div key ={b.id} className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <h3 className="h4 mb-2">{b.title}</h3>
                <p className="text-muted mb-0">{b.content.replace(/<\/?[^>]+>/gi, '').substr(0,50)}
                <a href={b.url} target="_blank" rel="noopener noreferrer">...</a></p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}


  export default Blog;
