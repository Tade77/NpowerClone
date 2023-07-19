// import React from "react";

const Button = ({ label, buttonType }) => {
  return (
    <button
      className={
        buttonType === "login"
          ? "login"
          : buttonType === "more"
          ? "more"
          : buttonType === "proceed"
          ? "proceed"
          : ""
      }
    >
      {label}
    </button>
  );
};

export default Button;
