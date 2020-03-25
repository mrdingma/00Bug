import React, { useState, useEffect } from "react";
import { useAuth0 } from "./auth0.jsx";

const VerifyEmail = () => {
  const { loading, user, loginWithRedirect } = useAuth0();

  let content = (
    <>
      <div className="row">
        <div name="email-box" className="col s6 offset-s3 email-box">
          <div className="row">
            <h3>Please verify your email</h3>
            <p>You're almost there! We sent an email to</p>
            <p>
              <strong>{user.email}</strong>
            </p>
            <p>
              Just click on the link in that email to complete your signup.
              <br />
              If you don't see it, you may need to check your spam folder.
            </p>
            <a class="waves-effect btn" onClick={() => loginWithRedirect({})}>
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return content;
};

export default VerifyEmail;
