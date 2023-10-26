import { CartWidget } from "./CartWidget"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const NavBar=()=>{
return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="lala">Inicio</Nav.Link>
            <Nav.Link href="lala">Productos</Nav.Link>
            <Nav.Link href="lala" >About</Nav.Link>
          </Nav>
          <CartWidget />
      </Container>
    </Navbar>
)

}
