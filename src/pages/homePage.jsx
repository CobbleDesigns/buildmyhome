import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/banner';
import Offer from '../components/offer';
import Packages from '../components/packages';
import TwoCol from '../components/TwoCol';
import Partners from '../components/Partners';
import HowItWorks from '../components/HowItWorks';
import Interiors from '../components/Interiors';
import WhyHire from '../components/WhyHire';
import Footer from '../components/Footer'; 

class Home extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <Banner />
                <Offer />
                <Packages />
                <TwoCol />
                <Partners />
                <HowItWorks />
                {// <Interiors />
                }
                <WhyHire />
                <Footer />
            </React.Fragment> 
         );
    }
}
 
export default Home;