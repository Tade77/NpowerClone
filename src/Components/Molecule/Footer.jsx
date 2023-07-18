import React from "react";
// import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const footerItems = [
  {
    id: 1,
    name: "Apply",
    path: "/apply",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "News",
    path: "/news",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#07321b",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "30px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {footerItems.map((item) => (
          <div
            key={item.id}
            style={{
              color: "#fff",
            }}
          >
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          style={{ height: "20px", width: "20px" }}
          src="/public/iconmonstr-facebook-4-240.png"
          alt=""
        />
        <img
          style={{ height: "20px", width: "20px" }}
          src="/public/iconmonstr-twitter-4.svg"
          alt=""
        />
        <img
          style={{ height: "20px", width: "20px" }}
          src="/public/iconmonstr-instagram-14-240.png"
          alt=""
        />
      </div>
      <div>
        <p style={{ color: "#fff", textAlign: "center" }}>
          Copyright 2023. Federal Ministry of Humanitarian Affairs, Disaster
          Management and Social Development. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
