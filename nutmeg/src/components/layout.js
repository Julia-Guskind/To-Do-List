import React from 'react'
import './base.css'
import Container from './container'
// import Navigation from './navigation'
import MainNavbar from './navbar'
import Jumbo from '../components/jumbo_wumbo'

class Template extends React.Component {
  render() {
    const { children, title } = this.props

    return (
      <div>
        <Jumbo title={title}></Jumbo>

        <Container>
          {children}
        </Container>
      </div>
    )
  }
}

export default Template
