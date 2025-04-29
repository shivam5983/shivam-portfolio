import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
