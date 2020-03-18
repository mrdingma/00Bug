import React, { useEffect } from "react";
import { useAuth0 } from "./auth0.jsx";
import Home from "./Home.jsx";

function App() {
  useEffect(() => {}, []);

  const { loading, user, loginWithRedirect } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {!user && loginWithRedirect({})}

      {user && <Home />}
    </div>
  );
}

export default App;
