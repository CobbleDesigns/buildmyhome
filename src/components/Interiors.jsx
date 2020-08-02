import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/interiors.css';

class Interiors extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='interiors' className='container'>
                <div className='container d-flex justify-content-center p-4'>
                    <h2>
                        <b>House Interior Project</b>
                    </h2>
                </div>
                <div classname="row"> 
                    <div classname=" card col-md-4">
                        <img src="/images/gallery/img-1.png" alt='' className='img-fluid' />
                    </div>
                    <div classname="card col-md-4">
                        <img src="/images/gallery/img-2.png" alt='' className='img-fluid' />
                    </div>
                    <div classname="card col-md-4">
                        <img src="/images/gallery/img-5.png" alt='' className='img-fluid' />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Interiors;