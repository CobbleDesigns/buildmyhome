import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/gallery-main.css';

function GalleryMain() {


        return ( 
            <section id="portfolio" className="portfolio">
            <div className="container gallery-main">
      
              <div className="row" >
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li> &nbsp; 
                    <li data-filter=".filter-app">Completed</li>&nbsp;
                    <li data-filter=".filter-card">On Going</li>&nbsp;
                    <li data-filter=".filter-web">Interiors</li>
                  </ul>
                </div>
              </div>
      
              <div className="row portfolio-container">
      
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
            <script>
            
            </script>
          </section>
         );
    }
 
export default GalleryMain;