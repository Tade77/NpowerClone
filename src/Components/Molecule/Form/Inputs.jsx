import React from "react";
import "./style.css";
import Button from "../../Atom/Button";

const LoginForm = () => {
  return (
    <form className="form">
      <div className="login--inputs">
        <input className="input--group" type="email" required />
        <input className="input--group" type="password" required />
      </div>
      <div className="check">
        <input type="checkbox" />
        <span style={{ marginLeft: "10px" }}>Keep me login</span>
      </div>
      <p className="psw">Forgot Password</p>
      <div className="loginB">
        <Button label={"Proceed"} buttonType={"proceed"} />
      </div>
    </form>
  );
};

export default LoginForm;
