import React, { Component } from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './NavBar.css';
import logo from './logo.png';

class NavBar extends Component {
render(){

    return (
      <div className='NavBar'>
          <Navbar expand='lg' className='navbar-style' >
            <Container>         
              <Navbar.Brand href="#home">
                  <img
                    alt="coco-logo"
                    src= {logo}
                    width="90"
                    height="60"              
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
                  <NavDropdown title="Follow Us" id="navbarScrollingDropdown">                  
                    <NavDropdown.Item href="https://instagram.com/coco_carnaval?utm_medium=copy_link"><span className='menu-items'><i class="fa-brands fa-instagram-square"></i>Instagram</span></NavDropdown.Item>         
                    <NavDropdown.Item href="https://www.facebook.com/Coco-carnaval-111929838090877/"><span className='menu-items'><i class="fa-brands fa-facebook"></i>Facebook</span></NavDropdown.Item>
                  </NavDropdown>
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


export default NavBar;
