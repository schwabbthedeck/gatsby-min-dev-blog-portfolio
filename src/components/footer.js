import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

export default () => (
  <Container fluid className="footer px-0">
    <Navbar bg="dark" variant="dark">
      <Row style={{ minWidth: '100%' }}>
        <Col md={2}>
          <Navbar.Brand className="nav-links">
            © 2020, Built with
          {` `}
            <a title="Gatsby" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          </Navbar.Brand>
        </Col>
        <Col md={1}>
          <Nav.Link as={Link} to="/" title="Home">
            Home
              </Nav.Link>
        </Col>
        <span className="divider">|</span>
        <Col md={2}>
          <Nav.Link as={Link} to="/blog" title="Latest Posts">
            Latest Posts
              </Nav.Link>
        </Col>
        <span className="divider">|</span>
        <Col md={2}>
          <Nav.Link title="GitHub repository" href="https://github.com/schwabthedeck/gatsby-min-dev-blog-portfolio" target="_blank" rel="noopener noreferrer">
            GitHub
              </Nav.Link>
        </Col>
        <span className="divider">|</span>
        <Col md={2}>
          <Nav.Link title="Twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
              </Nav.Link>
        </Col>
        <span className="divider">|</span>
        <Col md={2}>
          <Nav.Link title="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
              </Nav.Link>
        </Col>
      </Row>
    </Navbar>
  </Container>
)