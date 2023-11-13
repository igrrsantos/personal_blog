import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import './NavBar.css'
import logo from './logo.png'

const NavBar = () => {
  const location = useLocation()
  const showBackButton = location.pathname !== '/'

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" /> Personal Blog
          </Navbar.Brand>
          {showBackButton && (
            <Button as={Link} to="/" variant="outline-light">
              Voltar
            </Button>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
