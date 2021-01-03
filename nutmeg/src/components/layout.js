import React from 'react'
import './base.css'
import Container from './container'
// import Navigation from './navigation'
import MainNavbar from './navbar'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <MainNavbar title="Manual Test Title"></MainNavbar>
        {children}
      </Container>
    )
  }
}

export default Template
