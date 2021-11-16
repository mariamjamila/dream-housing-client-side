import { Box, margin } from "@mui/system";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../Firebase/Hooks/useAuth";

const Navigation = () => {
  const{user, logOut} = useAuth()
  return (
    <Navbar bg="light" text="primary"> 
      <Container>
        <Navbar.Brand as={Link} to="/home">Dream Housing</Navbar.Brand>
        <Nav>
      
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>

          <Nav.Link as={Link} to="/allhouses">
            All Houses
          </Nav.Link>
          
         { user?.email?
         <>
         <Nav.Link as={Link} style={{ textDecoration: "none", color:'blue'}} to="/dashboard">Dashboard</Nav.Link>
         
         <button className="btn btn-primary" onClick={logOut}> LogOut</button>
         </>
          
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
