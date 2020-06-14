import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./component/Navbar";
import Home from "./component/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./component/Portfolio";

export default function App(props) {
  return (
    <div>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}
