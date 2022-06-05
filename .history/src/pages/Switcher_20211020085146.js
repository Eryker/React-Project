import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Drapeausect from '../components/Drapeausect';
import Home from './Home';

function Switcher(props) {
    return (
        <div>

       <Switch>
          <Route ctexapath="/homepage">
            <Home/>
          </Route>
          <Route path="/">
            <Drapeausect />
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;