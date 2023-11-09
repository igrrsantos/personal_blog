import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleCreateAccountClick = () => {
    navigate('/create-account')
  }

  return (
    <Container className="custom-margin">
      <Row>
        <Col md={6}>
          <div className="text-center">
            <h1>Bem-vindo ao Personal Blog</h1>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <Button variant="primary" size="lg" className="m-2" onClick={handleLoginClick}>
              Login
            </Button>
            <Button variant="secondary" size="lg" className="m-2" onClick={handleCreateAccountClick}>
              Criar Nova Conta
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
