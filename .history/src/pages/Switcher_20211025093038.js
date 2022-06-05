import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Besoin from './Besoin';
import Drapeausect from '../components/Drapeausect';
import Home from './Home';
import 



function Switcher(props) {
    return (
        <div>

       <Switch>
       <Route exact path="/">
            <Drapeausect />
          </Route>
          
          <Route exact path="/homepage">
            <Home/>
          </Route>

          
    
          <Route exact path="/besoin">
          <Besoin />
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;