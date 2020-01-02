import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Profile from "./Profile";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </main>
  );
}
