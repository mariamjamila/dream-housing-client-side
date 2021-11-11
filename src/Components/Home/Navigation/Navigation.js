import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../Firebase/Hooks/useAuth";

const Navigation = () => {
  const{user, logOut} = useAuth()
  return (
    <Navbar bg="light" text="primary"> 
      <Container>
        <Navbar.Brand href="#home">Dream Housing</Navbar.Brand>
        <Nav >
        
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>

          <Nav.Link as={Link} to="/users">
            Users
          </Nav.Link>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          
         { user?.email?
         <button className="btn btn-primary" onClick={logOut}> LogOut</button>
           
          
        :
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
