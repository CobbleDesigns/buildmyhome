import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/partners.css';

class Partners extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='partners' className='container'>
                <div className='col-12 d-flex justify-content-center'>
                    <h2>
                        <b>Our Partners</b>
                    </h2>
                </div>
                <div className='row row-cols-1 row-cols-lg-5 row-cols-md-3'>
                <div className='col d-flex justify-content-center'>
                    <img src='/images/partners/godrej.png' alt='' />
                </div>
                <div className='col d-flex justify-content-center'>
                    <img src='/images/partners/asian-paints.png' alt='' />
                </div>
                <div className='col d-flex justify-content-center'>
                    <img src='/images/partners/jsw.png' alt='' />
                </div>
                <div className='col d-flex justify-content-center'>
                    <img src='/images/partners/greenply.png' alt='' />
                </div>
                <div className='col d-flex justify-content-center'>
                <img src='/images/partners/legrand.png' alt='' />
                </div>
            </div>
            </div>
         );
    }
}
 
export default Partners;