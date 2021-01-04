import React from "react"
import { Jumbotron, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, graphql } from "gatsby"
import MainNavbar from '../components/navbar'

export default function Jumbo({ title }) {

  //NOTE: when inline styling, React requires camelCase. Ex: background-color --> backgroundColor

   return (
     <Jumbotron fluid>
         <MainNavbar></MainNavbar>
        <Container>
            <h1>Welcome to {title}</h1>
            
            <p>
            Learn something new every day.
            </p>
            
        </Container>
        
    </Jumbotron>
   )
}


