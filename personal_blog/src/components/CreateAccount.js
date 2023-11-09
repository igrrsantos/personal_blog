import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import useCreateUser from '../hooks/useCreateUser'
import '../App.css'

function CreateAccount() {
  const [params, setParams] = useState({})
  const { createUser } = useCreateUser()

  const handleChange = (e) => {
    const { name, value } = e.target
    setParams({
      api_v1_user: {
        ...params.api_v1_user,
        [name]: value
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser(params)
  }

  return (
    <Container className="custom-margin">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-4">Criar Conta</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome"
                name="name"
                value={params.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={params.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Senha"
                name="password"
                value={params.password}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit">
                Criar Conta
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateAccount
