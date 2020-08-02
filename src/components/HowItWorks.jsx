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
                    <div className='row row-cols-2 row-cols-lg-5 row-cols-md-3 row-cols-sm-2'>
                        <div className='col'>
                            <img src='/images/icons/request.svg' alt='' />
                            <br />
                            <h6 align='center'>Request for Construction</h6>
                        </div>
                        <div className='col'>
                            <img src='/images/icons/get-in-touch.svg' alt='' />
                            <br />
                            <h6 align='center'>Get in Touch with us</h6>
                        </div>
                        <div className='col'>
                            <img src='/images/icons/decide-design.svg' alt='' />
                            <br />
                            <h6 align='center'>Decide Design for your home</h6>
                        </div>
                        <div className='col'>
                            <img src='/images/icons/project-start.svg' alt='' />
                            <br />
                            <h6 align='center'>Pay us 5% fee, Start your Project</h6>
                        </div>
                        <div className='col'>
                            <img src='/images/icons/track-project.svg' alt='' />
                            <br />
                            <h6 align='center'>Track your Project</h6>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HowItWorks;
