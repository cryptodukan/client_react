import React from "react";
import "./index.scss";
// @components
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// @packages
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import ActiveSidebarDataLayer from "./Context/ActiveSidebarItem";
// @cont3xt api

ReactDOM.render(
  <React.StrictMode>
    <ActiveSidebarDataLayer>
      <App />
    </ActiveSidebarDataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
