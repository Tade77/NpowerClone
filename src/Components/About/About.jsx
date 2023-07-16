import React from "react";
import Button from "../Atom/Button";
const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "105px",
        marginBottom: "100px",
      }}
    >
      <div style={{ marginLeft: "20px" }}>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "#fbb808",
          }}
        >
          About
        </p>
        <p
          style={{
            fontSize: "26px",
            lineHeight: "31px",
            fontWeight: 700,
            marginBottom: "50px",
          }}
        >
          Providing efficient, effective, and coordinated humanitarian response
          to Nigerians.
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            marginBottom: "50px",
            color: "rgba(0,0,0, 0.5)",
          }}
        >
          The National Social Investment Program of Nigeria is a social welfare
          initiative created by the Federal government of Nigeria in 2015 under
          the direction of the National Social Investment Office. The Program
          was created to ensure a more equitable distribution of resources to
          vulnerable populations, including children, youth, and women. Under
          President Muhammadu Buhari the office has created four programs to
          address poverty and help increase economic development.
        </p>
        <div style={{ marginLeft: "-20px" }}>
          <Button label={"Read More"} buttonType={"login"} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginRight: "20px",
        }}
      >
        <div style={{ zIndex: -1 }}>
          <img src="/public/images3.jpeg" alt="" />
          <img
            style={{
              transform: "translateY(30px)",
            }}
            src="/public/images4.jpeg"
            alt=""
          />
        </div>
        <div style={{ zIndex: -1 }}>
          <img src="/public/images5.jpeg" alt="" />
          <img
            style={{ transform: "translateY(30px)" }}
            src="/public/images6.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
