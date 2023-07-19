import React from "react";
import "./Style.css";
import Button from "../Atom/Button";

const Contact = () => {
  return (
    <div>
      <div className="contact--wrap">
        <div className="contact">
          <p className="p">Be the first to know</p>
          <p className="info">
            Follow us on our social media platforms for all the latest updates
            and applications news
          </p>
        </div>
        <div className="icon">
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
      </div>
      <div className="call-to-action">
        <p className="header">Got Questions?</p>
        <p>
          For enquiries, complaints or requests, feel free to reach out to us.
        </p>
      </div>
      <div className="con--btn">
        <Button label={"Contact Us"} buttonType={"login"} />
      </div>
    </div>
  );
};

export default Contact;
