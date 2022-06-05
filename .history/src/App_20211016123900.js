import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';

function App() {
  return ( 
    <div style={{backgroundImage: "url('/assets/images/back.jpg')",
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    
    }}>
      <figure className="figure">
      <img className='mda' src={process.env.PUBLIC_URL+ "/assets/images/mda.png"}></img>
        <figcaption class="figure-caption text-xs-right"></figcaption>
      </figure>
    

    <section className='content'>


  <h1>Ceci est un titre</h1>
  <p>Un paragraphe ici</p>

  </section>


<div className='profils'>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/avatar-1.png"}></img>
    <p className='nameP'>Profile</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/avatar-2.png"}></img>
    <p className='nameP'>Profile</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/avatar-3.png"}></img>
    <p className='nameP'>Profile</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/avatar-4.png"}></img>
    <p className='nameP'>Profile</p>
    </a>
  </div>
</div>
<div className='profils'>

  <a classhref="">
    Préférence du profile
  </a>
</div>




      {/* <img src={process.env.PUBLIC_URL+ "/assets/images/menn.png"}></img>
      <Button className="primary">primary button</Button>
      <Button variant="primary">Primary</Button>{' '}
      <Home /> */}
      


    </div>
  );
}

export default App;