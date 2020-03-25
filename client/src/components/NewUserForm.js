import React from 'react';
import Form from 'react-bootstrap/Form'
function NewUserForm() {
  return(
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  </Form>
  )
  }
export default NewUserForm;