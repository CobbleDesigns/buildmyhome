import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/how-it-works.css';

class HowItWorks extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='hiw-back'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center'>
                        <h2><b>How It Works</b></h2>
                    </div>
                    <div className='row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2'>
                        <div className='col justify-content-center'>
                            <div className='card'>
                                
                                <img src='/images/icons/request.svg' alt='' className='card-img' />
                                <h6 align='center'>Request for Construction</h6>

                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                
                                <img src='/images/icons/get-in-touch.svg' alt='' className='card-img' />
                                <h6 align='center'>Get in Touch with us</h6>

                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                
                                <img src='/images/icons/decide-design.svg' alt='' className='card-img' />
                                <h6 align='center'>Decide Design for your home</h6>
                                
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                
                                <img src='/images/icons/project-start.svg' alt='' className='card-img' />
                                <h6 align='center'>Pay us 5% fee, Start your Project</h6>

                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                
                                <img src='/images/icons/track-project.svg' alt='' className='card-img' />
                                <h6 align='center'>Track your Project</h6>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HowItWorks;
