import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
 
 export const listCategory = [
   { id:"abc12" , name:"Motos", path:"motos"},
   { id:"abc23" , name:"Autos", path:"autos"},
   { id:"abc34" , name:"Yates", path:"yates"}
 ]

const NavBar = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <img
              src="/imagenes/anj-containers-logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex">

            {listCategory.map(({id, name, path})=><NavLink  
                                                    key={id}
                                                    to={`categoria/${path}`} 
                                                    className={({isActive})=> isActive? 
                                                      "btn btn-primary mx-2"
                                                      :"btn btn-outline-primary mx-1"}
                                                    >{name}
                                                  </NavLink>
            )}
            
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
