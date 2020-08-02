import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/twocol.css'

class TwoCol extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="two-col" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                            <h1>Looking To Construct A Home?</h1>
                            <h2>Find Out What It Costs.</h2>
                            <div className='row' align='right'>
                                <a href className='two-col-primary text-white'>Get Estimate Now</a> &nbsp;
                                <a href className='two-col-secondary'>Check Out Our Packages</a>    
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-1 two-col-img" data-aos="fade-left" data-aos-delay="200">
                            <img src="/images/banner.svg" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default TwoCol;