import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentImages, setCurrentImages] = useState(1);

  const images = [
    "/public/npower2.jpeg",
    "/public/images2.jpeg",
    "/public/images3.jpeg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImages((currentImages + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImages, images.length]);

  return (
    <div style={{ width: "100%", height: "50%", objectFit: "contain" }}>
      <img style={{ width: "100%" }} src={images[currentImages]} alt="images" />
      <div
        style={{
          backgroundColor: "#161616",
        }}
      >
        <p style={{ textAlign: "center", padding: "20px 0", color: "white" }}>
          Read more about our response to the Covid-19 pandemic
          <a
            style={{
              marginLeft: "5px",
              textDecoration: "none",
              color: "green",
            }}
            href="https://ncdc.gov.ng"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
