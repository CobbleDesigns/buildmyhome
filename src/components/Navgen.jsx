import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/nav.css';
 


function NavbarGen() {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    
         return ( 
             <div>
                 
             <Navbar collapseOnSelect expand="lg" fixed='top' className='appBarSolid'>
               
               <Container>
                 <Navbar.Brand className='logo-orange' href='/'>BuildMyHome</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className='mr-auto'>
                   </Nav>
                   <Nav>
                     <NavDropdown title="Pricing" id="collasible-nav-dropdown" className='links-dark'>
                       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link className='links-dark' href="#features">How it Works</Nav.Link>
                     <Nav.Link className='links-dark' href="/gallery">Gallery</Nav.Link>
                     <Nav.Link className='links-dark' href="#deets">Contact Us</Nav.Link>
                     <Nav.Link eventKey={2} href="/form">
                       <a href onClick={handleShow} className='nav-orange'>
                         Get Quote
                          </a>
                       <Modal show={show} onHide={handleClose}>
                         <Modal.Header closeButton>
                           <Modal.Title>Modal heading</Modal.Title>
                         </Modal.Header>
                         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                         <Modal.Footer>
                           <Button variant="secondary" onClick={handleClose}>
                             Close
                            </Button>
                           <Button  onClick={handleClose}>
                             Save Changes
                            </Button>
                         </Modal.Footer>
                       </Modal>
                     </Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>                 
           </div>
          );
     
}
 

  
 export default NavbarGen;