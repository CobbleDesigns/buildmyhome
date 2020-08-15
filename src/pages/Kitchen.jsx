import React, { Component } from 'react';
import Navgen from '../components/Navgen'; 
import KitchenPack from '../components/KitchenPack'; 
import Footer from '../components/Footer'; 

class Kitchen extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navgen />
                <KitchenPack />
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Kitchen;