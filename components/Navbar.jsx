import Link from 'next/link';
import React from 'react';
import { Nav } from 'react-bootstrap';
import classes from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home" className={classes["nav"]}>
  <Nav.Item>
    <Nav.Link eventKey="link-1" className={classes["nav-link"]}>
      <Link  href="/">Home</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" className={classes["nav-link"]}>
    <Link href="/stayin/1">Stay In</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" className={classes["nav-link"]}>
    <Link href="/explore">Explore</Link>
    </Nav.Link>
  </Nav.Item>
</Nav>
  );
}

export default Navbar;
