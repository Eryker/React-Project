import React from 'react';
import {
    
    Link
  } from "react-router-dom";

function Drapeausect(props) {
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

    <Link to="/homepage">
        <img src={process.env.PUBLIC_URL+ "/assets/images/french.png"}></img>
    <p className='nameP'>Français</p>
    </Link>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/usa.png"}></img>
    <p className='nameP'>Anglais</p>
    </a>
  </div>
  <div className='profil'>
    <a href="">
    <img src={process.env.PUBLIC_URL+ "/assets/images/arabia.png"}></img>
    <p className='nameP'>Arabe</p>
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
            
        </div>
    );
}

export default Drapeausect;