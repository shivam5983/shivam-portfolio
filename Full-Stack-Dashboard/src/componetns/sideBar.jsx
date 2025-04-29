import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav className="flex-column bg-light vh-100 p-3" style={{ width: '250px' }}>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/settings">Settings</Nav.Link>
    </Nav>
  );
}

export default Sidebar;
