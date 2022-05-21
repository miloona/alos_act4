import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import axios from "axios";
window.axios = axios;
window.axios.defaults.baseURL = "http://localhost:8000/";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
