import React, { Component } from 'react';
import { img, Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './HeaderNav.css';
import logo from './logo.png';

class HeaderNav extends Component {
render(){

    return (
    <div>
        <Navbar expand='lg' className='navbar-style' >
          <Container fluid>         
            <Navbar.Brand href="#home">
                <img
                alt=""
                src= {logo}
                width="100"
                height="70"
                
                />{' '}
                <span className='coco'>Coco Carnaval</span> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#Home"><span className='menu-items'>About us</span></Nav.Link>
                <Nav.Link href="#Gallery"><span className='menu-items'>Gallery</span></Nav.Link>
                <NavDropdown title="Flavors" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#Black-Chocolat"><span className='menu-items'>Black</span></NavDropdown.Item>
                  <NavDropdown.Item href="#Coffee-Chocolat"><span className='menu-items'>Coffee</span></NavDropdown.Item>
                  <NavDropdown.Item href="#Hazelnut-Chocolat"><span className='menu-items'>Hazelnut</span></NavDropdown.Item>
                  <NavDropdown.Item href="#White-Chocolat"><span className='menu-items'>White</span></NavDropdown.Item>
                </NavDropdown>
               
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="looking for"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='btn-search' >Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>);
} 
}


export default HeaderNav;
