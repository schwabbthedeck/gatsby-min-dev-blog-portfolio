import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Form, Button } from 'react-bootstrap'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Contact Me</h1>
    <h3>Feel free to drop me a line.</h3>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Layout>
)

export default ContactPage