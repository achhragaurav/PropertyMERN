import Link from 'next/link';
import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="link-1">
      <Link href="/">Home</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">
    <Link href="/stayin">Stay In</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">
    <Link href="/buy">Buy</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" >
    <Link href="/explore">Explore</Link>
    </Nav.Link>
  </Nav.Item>
</Nav>
  );
}

export default Navbar;
