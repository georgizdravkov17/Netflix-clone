import React from 'react';
import { Navbar, Container, Nav,Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

   const navigate = useNavigate(); 

  return(
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand as={Link} to="/">Netflix</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
          <Nav.Link as={Link} to="/lists">Lists</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Button variant="primary" onClick={() => { navigate("/login") }}>Sign in</Button>
        <Button variant="primary" onClick={() => { navigate("/register") }}>Sign up</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;