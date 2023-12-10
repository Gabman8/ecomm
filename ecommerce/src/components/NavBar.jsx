import { CartWidget } from "./CartWidget"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import React from "react";


export const NavBar=()=>{
return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', margin: '5px'}}
            navbarScroll
          >
              <NavLink to="category/coches"  style={{color:'#4f4c4c', padding:'5px', 'font-family': 'Lato'}}>Coches</NavLink>
              <NavLink to="category/relojes" style={{color:'#4f4c4c', padding:'5px','font-family': 'Lato'}}>Relojes</NavLink>
              <NavLink to="category/portatiles" style={{color:'#4f4c4c', padding:'5px','font-family': 'Lato'}} >Ordenadores</NavLink>
          </Nav>
          <CartWidget />
      </Container>
    </Navbar>
)

}
