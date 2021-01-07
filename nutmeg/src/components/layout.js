import React from 'react'
import './styles/base.css'
import Container from './container'
// import Navigation from './navigation'
import MainNavbar from './navigation/navbar'

class Template extends React.Component {
  render() {
    const { children, title, category } = this.props

    return (
        <div>
          <MainNavbar title={title}></MainNavbar>
          <Container>
            {children}   {/* where blog posts are */}
          </Container>
        </div>
    )
  }
}

export default Template
