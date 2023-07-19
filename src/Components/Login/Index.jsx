import React from "react";
import "./Style.css";
import LoginForm from "../Molecule/Form/Inputs";

const Login = () => {
  return (
    <div className="nav">
      <div className="info--container">
        <div className="title">
          <p>Login to your NASIMS Account</p>
        </div>
        <div className="reg--info">
          <p style={{ color: "#288855", marginLeft: "15px" }}>
            For biometrics enrolment, kindly follow the instructions below;
          </p>
          <div className="reg--step">
            <ol>
              <li>Login to your dashboard and click the "verification" tab</li>
              <li>
                Click the “capture your fingerprint” button to download and
                install the enrolment application
              </li>
              <li>
                After installation, provide the required credentials and click
                "Proceed".
              </li>
              <li>
                Make sure the fingerprint biometric device is connected, then
                click on "Begin Enrolment" to launch the enrolment process.
              </li>
              <li>Click on the finger to begin the enrolment process</li>
              <li>
                Applicants are to enroll their Right thumb, Right index, Left
                thumb and Left index fingers only for successful enrolment
              </li>
              <li>
                After successful enrollment, click on “Submit” to save the
                biometric enrollment
              </li>
            </ol>
          </div>
          <div className="foo--msg">
            <p>
              After successful enrolment, please check the "verification" tab of
              your self service portal to confirm if the capture was successful.
            </p>
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
