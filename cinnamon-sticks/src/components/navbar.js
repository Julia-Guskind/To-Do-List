import React from "react"
import { Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { css } from "@emotion/react"

export default function OurNavbar() {
    
   return (
    <Navbar bg="light" expand="lg"
    /*
    css={css`
    color: blue;
    background-color: green;
   `} */
   >
          
      <Navbar.Brand href="/">To-Do List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about/">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
   )
}