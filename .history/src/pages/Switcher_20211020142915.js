import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Besoin from '../components/besoin';
import Drapeausect from '../components/Drapeausect';
import Home from './Home';



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
           
          <Route exact path="/besoin">
          <Besoin />
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;