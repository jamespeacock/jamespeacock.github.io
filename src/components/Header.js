import React from 'react'
import Nav  from 'react-bootstrap/Nav';
import scrollTo from 'gatsby-plugin-smoothscroll';


const Header = (props) => {
  if (props.include === "*") {
    return (
      <Nav className="navBar">
        <Nav.Item className="navItem">
            <Nav.Link onClick={() => scrollTo('#projects')}>PROJECTS</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
            <Nav.Link onClick={() => scrollTo('#hero')}>HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
            <Nav.Link href="/gallery/">GALLERY</Nav.Link>
          </Nav.Item>
        </Nav>
    )
  } else {
    return (
      <Nav className="navBar">
        <Nav.Item className="navItem">
          <Nav.Link href="/">HOME</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

export default Header
