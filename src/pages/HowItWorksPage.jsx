import React, { Component } from 'react';
import NavbarGen from '../components/Navgen'; 
import Footer from '../components/Footer'; 
import HowItWorks from '../components/HowItWorks'; 

class HiwPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavbarGen />
                    <HowItWorks/>
                <Footer/>
            </React.Fragment>
         );
    }
}
 
export default HiwPage;