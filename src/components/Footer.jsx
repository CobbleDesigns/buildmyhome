import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='footer-back'>
                <div className='container text-center text-md-left mt-5 text-white'>
                    <div className='row mt-3'>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <p>House Construction</p><br />
                            <p>Kitchen Renovation</p><br />
                            <p>Gardens and Balconies</p>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <p>packages</p><br />
                            <p>gallery</p><br />
                            <p>how it works</p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <p>About us</p><br />
                            <p>blogs</p><br />
                            
                        </div>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h1><b>BuildMyHome</b></h1>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">
                        All rights reserved - 2020
                    </div>
                </div>
            </div>
            );
    }
}
 
export default Footer;