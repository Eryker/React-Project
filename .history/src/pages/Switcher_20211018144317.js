import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Home from './Home';

function Switcher(props) {
    return (
        <div>

       <Switch>
          <Route path="/homepage">
            <Home/>
          </Route>
          <Route path="/">
            <Drap
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;