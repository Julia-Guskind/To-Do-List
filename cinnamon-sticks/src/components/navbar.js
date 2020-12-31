import React from "react"
import { Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, graphql } from "gatsby"

export default function MainNavbar({ title }) {

  //NOTE: when inline styling, React requires camelCase. Ex: background-color --> backgroundColor

   return (
     <div className="main-navbar">
       
       <h1 style={{marginTop: "1.5rem", color: "#D2691E", fontFamily: "Arial"}}> 
        <Link to="/" style={{display: "block"}}>
         {title}
        </Link></h1>
        
       <div className="nav justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="http://localhost:8000/___graphql">GraphiQL</Nav.Link>
              <NavDropdown title="Archives" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nutmeg</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cloves</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cinnamon</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
   )
}