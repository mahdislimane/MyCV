import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
function NavBar() {
  return (
    <div>
      {" "}
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Link to="/">
            <Button>My CV</Button>
          </Link>
          <Link to="/Portfolio">
            <Button>Portfolio</Button>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default NavBar;
