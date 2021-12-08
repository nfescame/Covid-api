import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProviders } from "./providers/index";

ReactDOM.render(
  <React.StrictMode>
    <AuthProviders>
      <App />
    </AuthProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
