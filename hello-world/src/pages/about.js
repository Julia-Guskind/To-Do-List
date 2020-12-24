import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import OurNavbar from "../components/navbar"
import Today from "../components/date"
import Lorem from "../components/lorem"


export default function About() {
  return (
    <div>
    <OurNavbar></OurNavbar>
    
    <Container>
    

      <Header headerText="About Gatsby"/>
      <Today></Today>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Auctor elit sed vulputate mi sit. A diam maecenas sed enim ut sem viverra. In arcu cursus euismod quis. Ultrices gravida dictum
      fusce ut placerat orci nulla. Nisi vitae suscipit tellus mauris a. Parturient montes nascetur ridiculus mus mauris vitae. Euismod 
      quis viverra nibh cras pulvinar mattis. Pellentesque habitant morbi tristique senectus. Dolor sit amet consectetur adipiscing elit 
      pellentesque habitant morbi tristique. Enim diam vulputate ut pharetra sit amet aliquam id. Congue nisi vitae suscipit tellus mauris
      a. Ornare suspendisse sed nisi lacus sed viverra tellus in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
      Etiam non quam lacus suspendisse faucibus interdum posuere.</p>

      <Lorem num={3}></Lorem> 

    </Container>
    </div>
  )
}