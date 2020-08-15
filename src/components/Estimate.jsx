import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/estimate.css'; 

class Estimate extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='estimate-bg'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center text-white'>
                        <h1 align='center'>
                            <b>Find out what we're capable of</b>
                        </h1>
                    </div>
                    <div className='col-12 col-md-4 text-white'>
                        <a href='/gallery' className='btn estimate-btn btn-block'>Click Here</a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Estimate;