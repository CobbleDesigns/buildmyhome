import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/two-pic.css'

class Twopictures extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="two-pic" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-2 two-pic-img">
                       <img src='/images/part-2.svg' alt=''/>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-1 two-pic-img" data-aos="fade-left" data-aos-delay="200">
                        <img src="/images/part-1.svg" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
 
export default Twopictures;