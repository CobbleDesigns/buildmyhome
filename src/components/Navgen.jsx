import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/nav.css';
import EnqForm from './EnqForm'; 
 //asdfasdf


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
                     <NavDropdown title="Packages" id="collasible-nav-dropdown" className='links-dark' style={{paddingRight: '5vh'}}>
                       <NavDropdown.Item href="/#packages">Commercial</NavDropdown.Item>
                       <NavDropdown.Item href="/kitchen">Kitchen</NavDropdown.Item>
                       <NavDropdown.Item href="/wardrobe">Wardrobe</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.4">Gardening</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link className='links-dark' href="/how-it-works" style={{paddingRight: '5vh'}}>How it Works</Nav.Link>
                     <Nav.Link className='links-dark' href="/gallery" style={{paddingRight: '5vh'}}>Gallery</Nav.Link>
                     <Nav.Link className='links-dark' href="/contact-us" style={{paddingRight: '15vh'}}>Contact Us</Nav.Link>
                     <Nav.Link eventKey={2} href="#sdf">
                       <a href onClick={handleShow} className='nav-orange'>
                         Get Quote
                          </a>
                       <Modal show={show} onHide={handleClose}>
                         <Modal.Header closeButton />
                         <Modal.Body>
                            <EnqForm />
                         </Modal.Body>
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