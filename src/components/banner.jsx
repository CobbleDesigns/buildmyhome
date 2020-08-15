import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/banner.css';
import EnqForm from './EnqForm'; 

function Banner () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return ( 
            <section className='hero'>
                <div className="container text-white">
                    <h1 className="col-md-7">Discover a unique way to build your dream house</h1>
                    <br />
                    <h5 className='col-md-7'>
                        Safety quality and time - that's what makes us work for you
                    </h5> <br />
                    <div className='col-md-7'>
                        <div className='row row-cols-1 row-cols-lg-2 row-cols-md-2'>
                            <div className='col'>
                                <a onClick={handleShow} className='landing-btn-primary btn-block shadow-lg'>Request a call</a>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton />
                                    <Modal.Body>
                                        <EnqForm />
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='col'>
                                <a href='#offer' className='btn landing-btn-secondary btn-block'>Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         );
    
}
 
export default Banner;