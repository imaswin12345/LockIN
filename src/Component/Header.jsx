import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top ">
      <Container>
        <Link to={'/'} style={{textDecoration:"none"}} ><Navbar.Brand ><img src="./Box.png" alt="logo"
        style={{ 
        width: '40px',  
        height: 'auto', 
        marginRight: '5px' }} ></img>LOCK-IN</Navbar.Brand></Link>
       
      </Container>
    </Navbar>
</>
    
  )
}

export default Header