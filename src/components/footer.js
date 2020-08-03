import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default () => (
  <Container fluid className="footer px-0">
    {/* <footer> */}
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="pl-5 ml-5 nav-links">
        © 2020, Built with 
          {` `}
        <a title="Gatsby" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link as={Link} to="/" title="Latest Posts">
            Latest Posts
          </Nav.Link>
          <span className="divider">|</span>
          <Nav.Link title="GitHub" href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </Nav.Link>
          <span className="divider">|</span>
          <Nav.Link title="Twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
          </Nav.Link>
          <span className="divider">|</span>
          <Nav.Link title="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* </footer> */}
  </Container>
)