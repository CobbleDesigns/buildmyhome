import React, { Component } from 'react';
import NavbarGen from '../components/Navgen';
import GalleryMain from '../components/gallery';
import WhyHire from '../components/WhyHire';
import Footer from '../components/Footer'; 

class Gallery extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='gallery'>
                <NavbarGen />
                <GalleryMain />
                <WhyHire />
                <Footer />
            </div>
         );
    }
}
 
export default Gallery;