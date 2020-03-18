import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./auth0.jsx";
import auth_config from "./auth_config";

ReactDOM.render(
  <Auth0Provider
    domain={auth_config.domain}
    client_id={auth_config.clientId}
    redirect_uri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("app")
);

serviceWorker.unregister();
