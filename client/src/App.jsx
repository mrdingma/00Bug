import React, { useEffect } from "react";
import { useAuth0 } from "./auth0.jsx";
import Home from "./Home.jsx";
import VerifyEmail from "./VerifyEmail.jsx";

function App() {
  useEffect(() => {}, []);

  const { loading, user, loginWithRedirect } = useAuth0();

  if (loading) {
    return (
      <div style={{ left: "50%" }} class="preloader-wrapper big active">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {!user && loginWithRedirect({})}
      {user && !user.email_verified && <VerifyEmail />}
      {user && user.email_verified && <Home />}
    </div>
  );
}

export default App;
