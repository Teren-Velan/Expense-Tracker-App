import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./container/Home/Home";

import useToken from "./useToken"
import Auth from './container/Auth/Auth'

function App() {
 
  const {token , setToken} = useToken()

  let redirect;
  if (!token) {
    redirect = <Auth to="/" setToken= {setToken} />;
  }
  return (
    <div className="App">
      <Router>
        <Switch> 
          
          <Route path="/home" component={Home} /> 
          {redirect}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
