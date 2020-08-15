import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/offer.css'

class Offer extends Component {
    render() { 
        return ( 
            <div id='offer' className='offer-back'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center text-white'>
                        <h2 className='offer-heading'> What Do We Offer
                        </h2>
                    </div>
                    <div className='row row-cols-1 row-cols-md-5 row-cols-sm-2'>
                        <div className='col'>
                            <div className='card shadow'>
                                <img src='/images/icons/architects.svg' alt='' className='cards-image' />
                                <div className='card-body'>
                                <h5 align='center'>
                                    Architects
                                </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card shadow'>
                                <img src='/images/icons/construction.svg' alt='' className='cards-image' />
                                <div className='card-body'>
                                <h5 align='center'>
                                    Construction
                                </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card shadow'>
                                <img src='/images/icons/interiors.svg' alt='' className='cards-image' />
                                <div className='card-body'>
                                <h5 align='center'>
                                    Interiors
                                </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card shadow'>
                                <img src='/images/icons/renovations.svg' alt='' className='cards-image' />
                                <div className='card-body'>
                                <h5 align='center'>
                                    Renovations
                                </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card shadow'>
                                <img src='/images/icons/smart-home.svg' alt='' className='cards-image' />
                                <div className='card-body'>
                                <h5 align='center'>
                                    Smart Homes
                                </h5>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
         );
    }
}
 
export default Offer;