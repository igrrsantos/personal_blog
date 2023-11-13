import React from 'react'
import { Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Sidebar() {
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    Cookies.remove('userInfo')
    navigate('/')
  }

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home" active>Início</Nav.Link>
      <Nav.Link eventKey="link-1">Perfil</Nav.Link>
      <Button variant="outline-danger" onClick={handleLogoutClick} className="mt-2">Deslogar</Button>
      <Form className="mt-3">
        <FormControl type="text" placeholder="Buscar" />
        <Button variant="outline-primary" className="mt-2">Buscar</Button>
      </Form>
    </Nav>
  )
}

export default Sidebar
