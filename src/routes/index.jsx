import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import NotFound from "../components/NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);
