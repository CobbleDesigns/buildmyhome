import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/packages.css'
import { Accordion, Card } from 'react-bootstrap';

class Packages extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='packages-back'>
                <div className='container'>
                    <div className='col-12 d-flex justify-content-center'>
                        <h1>Our Construction Packages</h1>
                    </div>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 accordions'>
                        <div className='col col-sm'>
                            <div className='card'>
                                <div className='card-title d-flex justify-content-center'>
                                    <h5>
                                        <b>Basic Package</b>
                                    </h5> 
                                </div> 
                                <div className='card-body d-flex justify-content-center'>
                                    <a href className='btn btn-orange btn-block text-white'>Get Quote</a>
                                </div>
                            </div> 
                            <Accordion>        
                                <div className='card'>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">        
                                        Design and Drawing
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">            
                                        <div className='card-body'>
                                            <ul>
                                                <li>2D Floor Plan</li>
                                                <li>Structural Designing</li>
                                                <li>Basic Elevation Design</li>
                                            </ul>
                                        </div>
                                    </Accordion.Collapse>
                                </div>
                            <Card  className='border-bottom back-white'>                                    
                            <Accordion.Toggle as={Card.Header} eventKey="1">    
                                Structure                                                     
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="1">                                        
                                    <Card.Body>
                                        <ul>
                                            <li>Steel: Gopala, Kamdhenu (Fe 500)</li>
                                            <li>Aggregates: 20mm &amp; 40mm</li>
                                            <li>Blocks: 6 inch for Exterior Wall &amp; 4 inch for Interior Wall</li>
                                            <li>Cement: Ramco or Zuari, Birla of Grade 43 &amp; 53</li>
                                            <li>M Sand: Blockwork &amp; P Sand: Plastering</li>
                                            <li>RCC Design Mix: M25</li>
                                            <li>Waterproofing: Dr.Fixit</li>
                                            <li>Ceiling Height: 10 Feet</li>
                                        </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card className='border-bottom back-white'>    
                            <Accordion.Toggle as={Card.Header} eventKey="2">    
                               Doors & Windows                                                     
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="2">                                        
                                    <Card.Body>
                                    <ul>
                                    <li>Main Door: Ready Made Door With Sal Wood Frame of 5 Inch by 3 Inch, 38mm Thickness</li>
                                    <li>Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch</li>
                                    <li>Windows: Aluminium 2 Track</li>
                                    </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card className='border-bottom back-white'>    
                            <Accordion.Toggle as={Card.Header} eventKey="3">    
                                Painting                                                    
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="3">                                        
                                    <Card.Body>
                                    <ul>
                                    <li>Interior: Birla Putty With Tractor Emulsion</li>
                                    <li>Exterior: Asian Primer With Ace Emulsion</li>
                                    </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card className='border-bottom back-white'>                                    
                            <Accordion.Toggle as={Card.Header} eventKey="4">    
                                Flooring                                                     
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="4">                                        
                                    <Card.Body>
                                    <ul>
                                    <li>Living &amp; Dining Flooring: Tiles Upto 50 Rs Per Sqft</li>
                                    <li>Room &amp; Kitchen Flooring: Tiles Upto 50 Rs Per Sqft</li>
                                    <li>Balcony &amp; Open Area Flooring: Tiles Upto 40 Rs Per Sqft</li>
                                    <li>Staircase Flooring: Sadarahalli Or Marbel Upto 50 Rs Per Sqft</li>
                                    <li>Parking Tiles: Anti-skid Tiles Upto 40 Rs Per Sqft</li>
                                    </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card className='border-bottom back-white'>                                    
                            <Accordion.Toggle as={Card.Header} eventKey="5">    
                                Electricals                                                     
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="5">                                        
                                    <Card.Body>
                                    <ul>
                                    <li>Wires – Finolex</li>
                                    <li>Switches – Anchor Roma</li>
                                    </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card  className='border-bottom back-white'>                                    
                            <Accordion.Toggle as={Card.Header} eventKey="6">    
                                Other Inclusive's                                                     
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="6">                                        
                                    <Card.Body>
                                    <ul>
                                    <li>Overhead Tank: 1000 ltrs Sintex</li>
                                    <li>Underground Sump: 5000 Ltrs</li>
                                    <li>MS Staircase Railing</li>
                                    <li>Parapet Wall 3 Feet High</li>
                                    <li>MS Basic Gate</li>
                                    </ul>
                                    </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        <Card className='border-bottom back-white'>
                            <Accordion.Toggle as={Card.Header} eventKey="7">
                                Extra Charges
                            </Accordion.Toggle>                                    
                            <Accordion.Collapse eventKey="7">           
                                    <Card.Body>
                                    <ul>
                                    <li>Compound Wall Construction: 1020 Per Rft (Now It’s Free Along with 3000 Square feet of Construction)</li>
                                    <li>Carpentry Work For Wadrobes: 960 Per Sqft</li>
                                    <li>KEB Connections &amp; Charges</li>
                                    <li>Water Connections &amp; Charges</li>
                                    <li>External Cladding As Per Market Rate</li>
                                    <li>Extra Sumping Depth 10 Rps Per Litre</li>
                                    <li>Elevation Work Extra</li>
                                    </ul>
                                    
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>         
                        </div>


                        <div className='col col-sm'>
                        <div className='card'>
                            <div className='card-title d-flex justify-content-center'>
                                <h5>
                                    <b>Standard Package</b>
                                </h5> 
                            </div> 
                            <div className='card-body d-flex justify-content-center'>
                                <a href className='btn btn-orange btn-block text-white'>Get Quote</a>
                            </div>
                        </div> 
                        <Accordion>        
                            <div className='card'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">        
                                    Design and Drawing
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">            
                                    <div className='card-body'>
                                        <ul>
                                            <li>2D Floor Plan</li>
                                            <li>Structural Designing</li>
                                            <li>Basic Elevation Design</li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </div>
                        <Card  className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="1">    
                            Structure                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="1">                                        
                                <Card.Body>
                                <ul>
                                <li>Steel: Indus or Meenakshi (Fe 550 D)</li>
                                <li>Aggregates: 20mm &amp; 40mm</li>
                                <li>Blocks: 6 inch for Exterior Wall &amp; 4 inch for Interior Wall</li>
                                <li>Cement: Ramco or Zuari, Birla of Grade 43 &amp; 53</li>
                                <li>M Sand: Blockwork &amp; P Sand: Plastering</li>
                                <li>RCC Design Mix: M25</li>
                                <li>Waterproofing: Dr.Fixit</li>
                                <li>Ceiling Height: 10 Feet</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>    
                        <Accordion.Toggle as={Card.Header} eventKey="2">    
                           Doors & Windows                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="2">                                        
                                <Card.Body>
                                <ul>
                                <li>Main Door: African Teak Doors With Teak Frame of 6 Inch by 4 Inch, Worth 30,000 Rps 38mm Thickness</li>
                                <li>Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 5 Inch by 3 Inch</li>
                                <li>Windows: UPVC With Glass or Sal Wood with Honne Shutters</li>
                                <li>Pooja Room Door:&nbsp; African Teak Doors With African Teak Frame</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>    
                        <Accordion.Toggle as={Card.Header} eventKey="3">    
                            Painting                                                    
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="3">                                        
                                <Card.Body>
                                <ul>
                                            <li>Interior: Birla Putty With Asian Premium Emulsion</li>
                                            <li>Exterior: Asian Primer With Weather Proof Paint</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="4">    
                            Flooring                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="4">                                        
                                <Card.Body>
                                <ul>
                                <li>Living &amp; Dining Flooring: Tiles Upto 70 Rs Per Sqft</li>
                                <li>Room &amp; Kitchen Flooring: Tiles Upto 70 Rs Per Sqft</li>
                                <li>Balcony &amp; Open Area Flooring: Tiles Upto 60&nbsp; Rs Per Sqft</li>
                                <li>Staircase Flooring: Sadarahalli Or Marbel Upto 70 Rs Per Sqft</li>
                                <li>Parking Tiles: Anti-skid Tiles Upto 50 Rs Per Sqft</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="5">    
                            Electricals                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="5">                                        
                                <Card.Body>
                                <ul>
                                <li>Wires – Finolex</li>
                                <li>Switches – Anchor Roma</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card  className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="6">    
                            Other Inclusive's                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="6">                                        
                                <Card.Body>
                                <ul>
                                <li>Overhead Tank: 1500 ltrs Sintex</li>
                                <li>Underground Sump: 8000 Ltrs</li>
                                <li>Staircase with MS Railing</li>
                                <li>Parapet Wall 3 Feet High</li>
                                <li>Solar Provision</li>
                                <li>Rain Water Harvesting</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    <Card className='border-bottom back-white'>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            Extra Charges
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="7">           
                                <Card.Body>
                                <ul>
                                <li>Compound Wall Construction: 1020 Per Rft (Now It’s Free Along with 3000 Square feet of Construction)</li>
                                <li>Carpentry Work For Wadrobes: 960 Per Sqft</li>
                                <li>KEB Connections &amp; Charges</li>
                                <li>Water Connections &amp; Charges</li>
                                <li>External Cladding As Per Market Rate</li>
                                <li>Extra Sumping Depth 10 Rps Per Litre</li>
                                <li>Elevation Work Extra</li>
                                </ul>
                                
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>         
                        </div>


                        <div className='col col-sm'>
                        <div className='card'>
                            <div className='card-title d-flex justify-content-center'>
                                <h5>
                                    <b>Premium Package</b>
                                </h5> 
                            </div> 
                            <div className='card-body d-flex justify-content-center'>
                                <a href className='btn btn-orange btn-block text-white'>Get Quote</a>
                            </div>
                        </div> 
                        <Accordion>        
                            <div className='card'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">        
                                    Design and Drawing
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">            
                                    <div className='card-body'>
                                    <ul>
                                    <li>2D Floor Plan</li>
                                    <li>Structural Designing</li>
                                    <li>3D Elevation Design</li>
                                    <li>Electrical Drawing</li>
                                    <li>Plumbing Drawing</li>
                                    <li>Furniture Plan</li>
                                </ul>
                                    </div>
                                </Accordion.Collapse>
                            </div>
                        <Card  className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="1">    
                            Structure                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="1">                                        
                                <Card.Body>
                                <ul>
                                <li>Steel: JSW Steel (Fe 550 D)</li>
                                <li>Aggregates: 20mm &amp; 40mm</li>
                                <li>Blocks: 6 inch for Exterior Wall &amp; 4 inch for Interior Wall</li>
                                <li>Cement: Ramco or Zuari, Birla of Grade 43 &amp; 53</li>
                                <li>M Sand: Blockwork &amp; P Sand: Plastering</li>
                                <li>RCC Design Mix: M25</li>
                                <li>Waterproofing: Dr.Fixit</li>
                                <li>Ceiling Height: 10 Feet</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>    
                        <Accordion.Toggle as={Card.Header} eventKey="2">    
                           Doors & Windows                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="2">                                        
                                <Card.Body>
                                <ul>
                                            <li>Main Door: Burma Teak Doors With Burma Teak Frame of 6 Inch by 4 Inch, Worth 70,000 Rps 38mm Thickness</li>
                                            <li>Internal Door: Flush Door With Laminates Along With Honne Wood Frame of 5 Inch by 3 Inch</li>
                                            <li>Windows: Honne Wood or UPVC With Glass &amp; Mess Shutter</li>
                                            <li>Pooja Room Door: Burma Teak Doors With Burma Teak Frame of 4 Inch by 3 Inch Worth 35000</li>
                                            </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>    
                        <Accordion.Toggle as={Card.Header} eventKey="3">    
                            Painting                                                    
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="3">                                        
                                <Card.Body>
                                <ul>
                                            <li>Interior: Birla Putty With Asain Royal Emulsion</li>
                                            <li>Exterior: Apex Ultima Weather Proof Paint</li>
                                            </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="4">    
                            Flooring                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="4">                                        
                                <Card.Body>
                                <ul>
                                <li>Living &amp; Dining Flooring: Tiles Upto 120 Rs Per Sqft (Granite Floor Opt )</li>
                                <li>Room &amp; Kitchen Flooring: Tiles Upto 120 Rs Per Sqft (Granite Floor Opt)</li>
                                <li>Balcony &amp; Open Area Flooring: Tiles Upto 60 Rs Per Sqft</li>
                                <li>Staircase Flooring: Sadarahalli Or Marbel Upto 90 Rs Per Sqft</li>
                                <li>Parking Tiles: Anti-skid Tiles Upto 50 Rs Per Sqft</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="5">    
                            Electricals                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="5">                                        
                                <Card.Body>
                                <ul>
                                <li>Wires – Havells</li>
                                <li>Switches – GM Modular/Legrand</li>
                                <li>Living Hall Smart Switches With Alexa or Google Pod</li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card  className='border-bottom back-white'>                                    
                        <Accordion.Toggle as={Card.Header} eventKey="6">    
                            Other Inclusive's                                                     
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="6">                                        
                                <Card.Body>
                                <ul>
                                <li>Overhead Tank: 2000 ltrs Sintex</li>
                                <li>Underground Sump: 10,000 Ltrs</li>
                                <li>SS Staircase Railing With Glass</li>
                                <li>Parapet Wall 3 Feet High</li>
                                <li>Solar Provision</li>
                                <li>Designer MS gates</li>
                                <li>Standard False Ceiling on Living Hall</li>
                                <li>Rain Water Harvesting</li>
                                <li></li>
                                </ul>
                                </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    <Card className='border-bottom back-white'>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            Extra Charges
                        </Accordion.Toggle>                                    
                        <Accordion.Collapse eventKey="7">           
                                <Card.Body>
                                <ul>
                                <li>Compound Wall Construction: 1020 Per Sqft (Now It’s Free Along with 3000 Square feet of Construction)</li>
                                <li>Carpentry Work For Wadrobes: 1350 Per Sqft</li>
                                <li>KEB Connections &amp; Charges</li>
                                <li>Water Connections &amp; Charges</li>
                                <li>External Cladding As Per Market Rate</li>
                                <li>Extra Sumping Depth 10 Rps Per Litre</li>
                                <li>Elevation Work Extra</li>
                                </ul>
                                
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>         
                   </div>
                    </div>
                </div>                
            </div>
         );
    }
}
 
export default Packages;






















// https://www.youtube.com/watch?v=t5pJ-SYCZa0