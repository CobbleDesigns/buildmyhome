import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/banner.css'

class Banner extends Component {

    render() { 
        return ( 
            <section className='hero'>
                <div className="container text-white">
                    <h1 className="col-md-7">Discover a unique way to build your dream house</h1>
                    <br />
                    <h5 className='col-md-7'>
                        Safety quality and time - that's what makes us work for you
                    </h5> <br />
                    <div className='col-md-7'>
                        <div className='row'>
                        <a href className='landing-btn-primary shadow-lg'>Request a call</a> &nbsp;
                        <a href className='landing-btn-secondary'>Explore</a>
                        </div>
                    </div>
                </div>
            </section>

         );
    }
}
 
export default Banner;