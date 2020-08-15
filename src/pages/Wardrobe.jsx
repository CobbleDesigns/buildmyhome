import React, { Component } from 'react';
import Navgen from '../components/Navgen'; 
import WardrobePack from '../components/WardrobePack'; 
import Footer from '../components/Footer'; 

class Wardrobe extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navgen />
                <WardrobePack />
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Wardrobe;