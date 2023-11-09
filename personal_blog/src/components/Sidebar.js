import React from 'react'
import { Nav, Form, FormControl, Button } from 'react-bootstrap'

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home" active>Início</Nav.Link>
      <Nav.Link eventKey="link-1">Perfil</Nav.Link>
      <Nav.Link eventKey="link-2">Mensagens</Nav.Link>
      <Form className="mt-3">
        <FormControl type="text" placeholder="Buscar" />
        <Button variant="outline-primary" className="mt-2">Buscar</Button>
      </Form>
    </Nav>
  )
}

export default Sidebar
