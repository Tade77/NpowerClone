import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import Button from "../../Atom/Button";

const NavB = () => {
  return (
    <Navbar
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "15px 15px",
      }}
    >
      <Nav>
        <a
          href="#"
          style={{ textDecoration: "none", marginLeft: "15px", color: "black" }}
        >
          Federal Ministry of Humanitarian Affairs, Disaster <br />
          Management and Social Development
        </a>
      </Nav>
      <Nav className="">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          About
        </Nav.Link>
        <Nav.Link to="/news" as={NavLink}>
          News
        </Nav.Link>
        <Nav.Link to="/contact" as={NavLink}>
          Contact
        </Nav.Link>
        <Button label={"Login"} buttonType={"login"} />
      </Nav>
    </Navbar>
  );
};

export default NavB;
