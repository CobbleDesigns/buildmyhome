import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel } from 'react-bootstrap'; 
import './style/partners.css';

function Partners() {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
    return (
        <div id='partners' className='container'>
            <div className='col-12 d-flex justify-content-center'>
                <h1>
                    <b>Our Partners</b>
                </h1>
            </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block justify-content-center"
                            src="/images/partners/godrej.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block d-flex justify-content-center"
                            src="/images/partners/asian-paints.png"
                            alt="Second slide"
                        />
      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block d-flex justify-content-center"
                            src="/images/partners/legrand.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block d-flex justify-content-center"
                            src="/images/partners/greenply.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block d-flex justify-content-center"
                            src="/images/partners/jsw.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    );
}
 
export default Partners;