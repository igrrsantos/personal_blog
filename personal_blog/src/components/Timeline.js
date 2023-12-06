import React from 'react'
import Post from './Post.js'
import { Col, Container, Row } from 'react-bootstrap'
import NewPostBox from './NewPostBox.js'
import useListPosts from '../hooks/useListPosts.js'

const Timeline = () => {
  const { posts, fetchPosts } = useListPosts()

  return (
    <Container>
      <Row>
        <Col>
          <NewPostBox fetchPosts={fetchPosts}/>
          {posts?.map(post => (
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
