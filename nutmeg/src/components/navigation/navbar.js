import React from "react"
import 'mdbreact/dist/css/mdb.css'

import { Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, graphql } from "gatsby"


export default function MainNavbar({ title }) {

  //NOTE: when inline styling, React requires camelCase. Ex: background-color --> backgroundColor

   return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Cinnamon Stix</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="http://localhost:8000/___graphql">GraphiQL</Nav.Link>
          <Nav.Link href="/archives">Archives</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </>
   )
}