import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';
import Drapeausect from './components/Drapeausect';
import {
  BrowserRouter
} from "react-router-dom";
import {
    
  Link
} from "react-router-dom";
import Switcher from './pages/Switcher';

function App() {
  return ( 
    <div >
      <BrowserRouter>
    <Link to="/besoin">
      <h1>link to na</h1>
    
    </Link>

      
    
    <Switcher />

    </BrowserRouter>


    </div>
  );
}

export default App;