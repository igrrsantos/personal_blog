import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import useCreateSession from '../hooks/useCreateSession.js'

function Login() {
  const [params, setParams] = useState({})
  const { createSession } = useCreateSession()

  const handleChange = (e) => {
    const { name, value } = e.target
    setParams({
      api_v1_user: {
        ...params.api_v1_user,
        [name]: value
      },
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    createSession(params)
  }

  return (
    <Container className="custom-margin">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-4">Login</h2>
          <Form>
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
              <Button variant="primary" onClick={handleLogin}>
                Entrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
