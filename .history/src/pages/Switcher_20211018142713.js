import React from 'react';
import {
    
    Switch,
    Rou
  } from "react-router-dom";

function Switcher(props) {
    return (
        <div>

       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            
        </div>
    );
}

export default Switcher;