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
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App(){
  return (
    <div className="bg-dark">

    <Navi/>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
        <Route exact path="/product" component={Dashboard}/>
        <Route exact path="/cart" component={cartDetail}/>
        <Route exact path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route exact path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route exact component={NotFound}/>
    </Switch>
    </div>
  );
    }
export default App;

