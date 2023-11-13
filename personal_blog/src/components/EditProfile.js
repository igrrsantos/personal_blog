import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [bio, setBio] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected File:', file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Foto:', photo);
    console.log('Biografia:', bio);
  };

  return (
    <Container className="custom-margin" style={{ maxWidth: '66%' }}>
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhoto">
          <Form.Label>Photo:</Form.Label>
          <Form.Control
            type="text"
            value={photo}
            onChange={handlePhotoChange}
          />
          <Form.Label>Choose File:</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Form.Group controlId="formBio">
          <Form.Label>Biography:</Form.Label>
          <Form.Control
            as="textarea"
            value={bio}
            onChange={handleBioChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
