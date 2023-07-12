import React from "react";

const OfficialSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
        margin: "100px 10px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          marginLeft: "100px",
        }}
      >
        <img
          style={{ height: "400px", width: "400px" }}
          src="/public/images1.jpeg"
          alt="official"
        />
      </div>
      <div
        style={{
          // backgroundColor: "red",
          marginRight: "100px",
          textAlign: "justify",
        }}
      >
        <p style={{ fontSize: "26px", fontWeight: 700 }}>
          Welcome to the National Social Investment Management System (NASIMS)
        </p>
        <p>
          <a
            style={{
              color: "green",
              textDecoration: "none",
              marginRight: "5px",
            }}
            href="https://fmhds.gov.ng"
          >
            The Federal Ministry of Humanitarian Affairs, Disaster Management
            and Social Development
          </a>
          was established on Wednesday August 21st, 2019 by an Executive
          pronouncement by the President and Commander in Chief of the Armed
          Forces of Nigeria, H.E., Muhammadu Buhari GCFR at the inauguration of
          Ministers for the Federal Republic of Nigeria. Under My leadership as
          Minister, the Ministry will position itself in light of the prevailing
          Humanitarian situation in the country through its Vision, Mission and
          Core values to promote Human dignity and Integration of basic Humane
          benevolence and compassion in the treatment of all Nigerians
        </p>
        <div>
          <p>Sadiya Umar Farouq</p>
          <span>Honorable Minister</span>
        </div>
      </div>
    </div>
  );
};

export default OfficialSection;
