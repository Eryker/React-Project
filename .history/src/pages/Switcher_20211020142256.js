import React from 'react';
import {
    
    Switch,
    Route

  } from "react-router-dom";
import Drapeausect from '../components/Drapeausect';
import Home from './Home';
import Besoin from '../components/Besoin';


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
           
          <Route exacpath="/besoin">
          <Besoin />
          </Route>

        </Switch>
            
        </div>
    );
}

export default Switcher;