import React, { useEffect, useState } from "react";
import "./Style.css";
import Button from "../Atom/Button";

const Program = () => {
  const [currentImages, setCurrentImages] = useState(1);
  const [currentCaption, setCurrentCaption] = useState(1);

  const programImg = [
    {
      images: "/public/images5.jpeg",
      caption: "Government Enterprise and Empowerment Program (GEEP)",
      description:
        "The National Home Grown School Feeding Program was created to provide a nutritious and balanced meal to 5.5 million school children grades 1 to 3",
    },
    {
      images: "/public/images5.jpeg",
      caption: "National Home Grown School Feeding Program (NHGSFP)",
      description:
        "The National Home Grown School Feeding Program was created to provide a nutritious and balanced meal to 5.5 million school children grades 1 to 3",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImages((currentImages + 1) % programImg.length);
      setCurrentCaption((currentCaption + 1) % programImg.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImages, programImg.length]);
  return (
    <div
      style={{
        backgroundColor: "#f2fcf9",
        marginBottom: "100px",
        marginLeft: "10px",
        marginRight: "10px",
        paddingBottom: "100px",
      }}
    >
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <p style={{ fontSize: "26px", lineHeight: "31px", fontWeight: 700 }}>
          Our Programmes
        </p>
        <div style={{ color: "rgba(0,0,0, 0.5)", lineHeight: "10px" }}>
          <p>
            Our programmes are specifically designed to empower, train and
            uplift millions of
          </p>
          <p>abandoned Nigerians in every part of the country.</p>
        </div>
      </div>
      <div className="program--card">
        {programImg.map((proImg) => (
          <>
            <figure className="card">
              <img className="foto" src={proImg.images} alt="" />
              <figcaption className="caption">{proImg.caption}</figcaption>
              <figcaption className="desc">{proImg.description}</figcaption>

              <div className="btns">
                <Button label={"Apply Now"} buttonType={"login"} />
                <Button label={"Learn More"} buttonType={"more"} />
              </div>
            </figure>
          </>
        ))}
      </div>
    </div>
  );
};

export default Program;
