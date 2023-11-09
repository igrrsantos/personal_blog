import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import useCreatePost from '../hooks/useCreatePost'

const NewPostBox = ({ fetchPosts }) => {
  const [postContent, setPostContent] = useState('')
  const [image, setImage] = useState(null)
  const { createPost } = useCreatePost()

  const handleContentChange = (e) => {
    setPostContent(e.target.value)
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      user_id: 4,
      content: postContent,
    }

    const result = await createPost(params)

    if (result) {
      fetchPosts()
    }
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="postContent">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="O que está acontecendo?"
              value={postContent}
              onChange={handleContentChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="postImage">{image ? image.name : "Anexar imagem"}</Form.Label>
            <Form.Control
              type="file"
              id="postImage"
              onChange={handleImageChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Postar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default NewPostBox
