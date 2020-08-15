import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/why-hire.css';
//dgkhdfslgkh
class WhyHire extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='wh-back'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center'>
                        <h2>
                            <b>Why hire us</b>
                        </h2>
                    </div>
                    <div className='row row-cols-1 row-cols-lg-4 row-cols-sm-2'>
                        <div className='col'>
                            <div className='card'>
                                <img src='/images/icons/end-to-end.svg' alt='' />
                                <div className='card-title d-flex justify-content-center'>
                                        <b>End to End Ownership</b>
                                </div>

                                <div className='card-body justify-content center'>
                                    <p>
                                    We’re your single point of contact, let us manage the designers, architects, structural engineers, site supervisors, quality controllers and more.   
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src='/images/icons/quality-assuarance.svg' alt='' />
                                <div className='card-title d-flex justify-content-center'>
                                    <b align='center'>Quality & Discount Assuarance</b>
                                </div>
                                <div className='card-body justify-content-center'>
                                    <p>
                                    Transparency is achieved for both, working process as well as raw material used. Great deals with partnered store!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src='/images/icons/budget-and-time.svg' alt='' />
                                <div className='card-title d-flex justify-content-center'>
                                    <b>Budget & Time upfront</b>
                                </div>
                                <div className='card-body jsutify-content-center'>
                                    <p>
                                    Get a clear idea of your total project budget and friendly payment schedule upfront. No false promises now and surprises later.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src='/images/icons/timely-update.svg' alt='' />
                                <div className='card-title d-flex justify-content-center'>
                                    <b>Timely Updates & Delivery</b>
                                </div>
                                <div className='card-body justify-content-center'>
                                    <p>
                                    Once a project initiates, there is literally next to no delays when we talk about keeping a check on project status.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default WhyHire;