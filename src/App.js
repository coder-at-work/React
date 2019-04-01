<<<<<<< HEAD
import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';
import { Route, Switch } from 'react-router-dom';
import './App.css';
=======
import React, { Component } from "react";
import Folder from "./Components/Folder";
import "./App.css";
>>>>>>> origin/master

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Layout>
          <Switch>
            <Route path = "/orders" exact component = {Orders} />
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/" exact component = {BurgerBuilder} />
          </Switch>
        </Layout>
=======
        <Folder />
>>>>>>> origin/master
      </div>
    );
  }
}

export default App;
