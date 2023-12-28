import React from 'react'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../image/logo-site.png";
const Header = () => {
  return (
    <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="/">
      <img src={logo} alt='logo' />
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About Us</Nav.Link>
          {/* <NavDropdown  href="/page" title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="/page">Pages</NavDropdown.Item>
            <NavDropdown.Item href="/">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="/">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/Services">Services</Nav.Link>
          <Nav.Link href="/partner">OUR PARTNERS</Nav.Link>
          <Nav.Link href="/Blog">Blog</Nav.Link>   
          <Nav.Link href="/Contact">Contact</Nav.Link>
      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>



  )
}

export default Header