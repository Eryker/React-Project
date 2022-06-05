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
    <img src={process.env.PUBLIC_URL+ "/assets/images/french.png"}></img>
    <p className='nameP'>Français</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/england.png"}></img>
    <p className='nameP'>Anglais</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/japan.png"}></img>
    <p className='nameP'>Japonais</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/spain.png"}></img>
    <p className='nameP'>Espagnol</p>
    </a>
  </div>
</div>


<div className='profils'>

  <a className='btn' href="">
    Préférence du profile
  </a>
</div>
<div></div>


    </div>
  );
}

export default App;