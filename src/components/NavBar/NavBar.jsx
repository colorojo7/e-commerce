import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
 
const NavBar = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <img
              src="public/imagenes/anj-containers-logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex">
            <NavLink  
            to='categoria/motos' 
            className={({isActive})=> isActive? 
              "btn btn-primary mx-2"
              :"btn btn-outline-primary mx-1"}
            >
                Motos
            </NavLink>
            <NavLink 
            to='categoria/autos' 
            className={({isActive})=> isActive? 
              "btn btn-primary mx-2"
              :"btn btn-outline-primary mx-1"}
            >
                Autos
            </NavLink>
            <NavLink 
            to='categoria/yates' 
            className={({isActive})=> isActive? 
              "btn btn-primary mx-2"
              :"btn btn-outline-primary mx-1"}
            >
                Yates
            </NavLink>
          </Nav>
          <Nav>
            <Link to="/carrito"><CartWidget/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
