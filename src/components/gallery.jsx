import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/gallery-main.css';

class GalleryMain extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="portfolio" className="portfolio">
            <div className="container">
      
              <div className="section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Some pictures showing our tools and work</p>
              </div>
      
              <div className="row" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">Tools</li>
                    <li data-filter=".filter-card">Machines</li>
                    <li data-filter=".filter-web">Works</li>
                  </ul>
                </div>
              </div>
      
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Tool 1"><i className="bx bx-plus"></i></a>
                    
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Work 1"><i className="bx bx-plus"></i></a>
                      
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Tool 2"><i className="bx bx-plus"></i></a>
                        
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Machine 1"><i className="bx bx-plus"></i></a>
                        
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Work 2"><i className="bx bx-plus"></i></a>
                       
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Tool 3"><i className="bx bx-plus"></i></a>
                       
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Machine 2"><i className="bx bx-plus"></i></a>
                       
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Machine 3"><i className="bx bx-plus"></i></a>
                      
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="/images/landing_img_3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                     
                      <div className="portfolio-links">
                        <a href data-gall="portfolioGallery" className="venobox" title="Work 3"><i className="bx bx-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
         );
    }
}
 
export default GalleryMain;