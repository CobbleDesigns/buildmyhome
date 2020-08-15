import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/nav.css';
import EnqForm from './EnqForm'; 
 
//skdjfh

function NavBar() {
    
  const [navBackground, setNavBackground] = useState('appBarTransparent'); 
  const [logoColor, setLogoColor] = useState('logo-color'); 
  const [links, setLinks] = useState('links-light'); 
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 21
            if (show) {
              setNavBackground('appBarSolid');
              setLogoColor('logo-orange');
              setLinks('links-dark')
            } else {
              setNavBackground('appBarTransparent'); 
              setLogoColor('logo-white')
              setLinks('links-light')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    
         return ( 
             <div>
                 
             <Navbar collapseOnSelect expand="lg" fixed='top' className={navBackground}>
               
               <Container>
                 <Navbar.Brand className={logoColor} href='/'>BuildMyHome</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className='mr-auto'>
                   </Nav>
                   <Nav>
                     <NavDropdown title="Packages" id="collasible-nav-dropdown" className={links} style={{paddingRight: '5vh'}}>
                       <NavDropdown.Item href="/#packages">Commercial</NavDropdown.Item>
                       <NavDropdown.Item href="/kitchen">Kitchen</NavDropdown.Item>
                       <NavDropdown.Item href="/wardrobe">Wardrobe</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.4">Garden</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link className={links} href="/how-it-works" style={{paddingRight: '5vh'}}>How it Works</Nav.Link>
                     <Nav.Link className={links} href="/gallery" style={{paddingRight: '5vh'}}>Gallery</Nav.Link>
                     <Nav.Link className={links} href="/contact-us" style={{paddingRight: '15vh'}}>Contact Us</Nav.Link>
                     <Nav.Link eventKey={2} href="#">
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
 

  
 export default NavBar;