import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import Button from "../../Atom/Button";

const NavB = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15x 15px",
        position: "fixed",
        width: "100%",
        boxShadow: "5px 5px 5px rgba(0,0,0, 0.1)",
        backgroundColor: "#fff",
        zIndex: 1,
      }}
    >
      <Nav>
        <a
          href="#"
          style={{
            // textDecoration: "none",
            marginLeft: "15px",
            // color: "black",
            // fontSize: "18px",
            // lineHeight: "21px",
            // fontWeight: 600,
          }}
        >
          <img
            style={{ height: "60px", width: "60px" }}
            src="/public/nasims-1616816230.png"
            alt=""
          />
        </a>
      </Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Nav className="navs">
          <Nav.Link className="navList" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="navList" to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link className="navList" to="/news" as={NavLink}>
            News
          </Nav.Link>
          <Nav.Link className="navList" to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
        <div onClick={() => navigate("/login")}>
          <Button label={"Login"} buttonType={"login"} />
        </div>
      </div>
    </Navbar>
  );
};

export default NavB;
