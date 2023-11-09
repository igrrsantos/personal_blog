import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useListPosts from '../hooks/useListPosts'
import Sidebar from './Sidebar'
import Timeline from './Timeline'

function App() {
  const { posts } = useListPosts()

  return (
    <Container fluid style={{ maxWidth: '80%', marginTop: '10px' }}>
      <Row className="justify-content-center">
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={8} id="page-content-wrapper">
          <Timeline posts={posts} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
