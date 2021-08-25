import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Developers from "../components/layout/Developers"

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/developers" component={Developers} />
    </Switch>
  );
};

export default MainRoute;
