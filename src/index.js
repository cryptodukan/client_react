import React from "react";
import "./index.scss";

// @components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// @cont3xt api
import ActiveSidebarDataLayer from "./Context/ActiveSidebarItem";

// @packages
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // @dev redirectUri is used to redirect the app location after successfully logging in!
      redirectUri={window.location.origin}
    >
      <ActiveSidebarDataLayer>
        <App />
      </ActiveSidebarDataLayer>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
