import React, { Component } from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import cartDetail from "../cart/cartDetail"
import {
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { Container } from "reactstrap";

function App(){
  return (
    <div className="bg-dark">

    <Navi/>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
        <Route exact path="/product" component={Dashboard}/>
        <Route exact path="/cart" component={cartDetail}/>
    </Switch>
    </div>
  );
    }
export default App;

