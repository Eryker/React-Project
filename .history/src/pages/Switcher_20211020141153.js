import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Drapeausect from '../components/Drapeausect';
import Home from './Home';
import Besoin '../compone'


function Switcher(props) {
    return (
        <div>

       <Switch>
          <Route exact path="/homepage">
            <Home/>
          </Route>

          <Route path="/">
            <Drapeausect />
          </Route>
           
          <Route path="/beoins">
          <Besoin />
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;