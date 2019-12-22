import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Routes from "./routes";

console.log(process.env);
ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("app")
);
