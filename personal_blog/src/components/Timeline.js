import React from 'react'
import Post from './Post'
import { Col, Container, Row } from 'react-bootstrap'
import NewPostBox from './NewPostBox'

const Timeline = ({ posts }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NewPostBox />
          {posts.map(post => (
            <Post
              key={post.id}
              username={post.user.name}
              content={post.content}
              timestamp={post.created_at}
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Timeline
