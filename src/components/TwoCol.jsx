import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/twocol.css'; 
import EnqForm from './EnqForm'; 
import { Modal } from 'react-bootstrap'; 

function TwoCol() {
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section id="two-col" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                        <h1>Looking To Construct A Home?</h1>
                        <h2>Find Out What It Costs.</h2>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 padding' align='right'>
                            <div className='col'>
                                <a href className='two-col-primary btn-block text-white' onClick={handleShow}>Get Estimate Now</a>
                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    <EnqForm />
                                </Modal.Body>
                            </Modal>
                            </div>
                            <div className='col'>
                                <a href='/packages' className='btn two-col-secondary btn-block'>Our Packages</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-1 two-col-img" data-aos="fade-left" data-aos-delay="200">
                        <img src="/images/banner.svg" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </section>
    ); 
}
 
export default TwoCol;