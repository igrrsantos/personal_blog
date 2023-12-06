import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar.js'
import Timeline from './Timeline.js'

function Dashboard() {
  return (
    <Container fluid className='custom-margin' style={{ maxWidth: '80%' }}>
      <Row className="justify-content-center">
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={8} id="page-content-wrapper">
          <Timeline />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
