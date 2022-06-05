import React from 'react';
import {
    
    Link
  } from "react-router-dom";

function Drapeausect(props) {
    return (
        <div>
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
    <Link to="/homepage"><img src={process.env.PUBLIC_URL+ "/assets/images/french.png"}></img></Link>
    <p className='nameP'>Français</p>
    </a>
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