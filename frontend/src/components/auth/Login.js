import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://static-00.iconduck.com/assets.00/quora-icon-495x512-sp3u96sp.png"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
