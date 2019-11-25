import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Routers;
