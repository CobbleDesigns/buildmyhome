import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarGen from '../components/Navgen';
import Footer from '../components/Footer';  
import EnqForm from '../components/EnqForm';
import '../components/style/contact-page.css';
//something
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavbarGen />
                <div id='contact' className='container'>
                    <div className='container d-flex justify-content-center' style={{ padding: '3vh' }}>
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <div className='col-md-6 justify-content-end'>
                        <div className='contact-card shadow-lg d-flex justify-content-end'>
                            <EnqForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Contact;