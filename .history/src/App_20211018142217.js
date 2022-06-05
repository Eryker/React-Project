import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';
import Drapeausect from './components/Drapeausect';
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return ( 
    <div style={{backgroundImage: "url('/assets/images/back.jpg')",
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    
    }}>
      
      
    <Drapeausect />


    </div>
  );
}

export default App;