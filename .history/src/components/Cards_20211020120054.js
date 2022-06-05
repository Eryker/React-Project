import React from 'react';
import {Card} from'react-bootstrap';
import { Button } from 'react-bootstrap';
import  '../components/styles/cards.css';


function Cards(props) {
    const { text,title} = props;
    return (
        
        
        <div>

            {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> */}


<div id="main">
                            <div id="title">
                                <h1>Bienvenu sur le formulaire</h1>
                                <h2 id="description">"Veuillez remplir le formulaire ci-joint"</h2>
                            </div>
                                    
                                <form id="Survey-form">
                            
                                <label id="name-label">Nom :</label>
                                <input id="name" className="area" type="text" name="Votre nom"  placeholder="Votre nom" required></input><br></br>

                                <br></br>




  <label id="email-lavel">Prénom :</label>
  <input id="email" class="area" type="text" name="prenom" placeholder="Votre prénom" required></input><br></br>
  <br></br>

  <label id="number-label">Âge:</label>
  <input id="number" class="area" type="number" name="âge" min="12" max="99" value="" placeholder="Votre âge" required></input>

  <br></br>
  <br></br>

  <label>Votre Statut actuel:</label><br></br>
  <br></br>
  <select id="dropdown">
    <option value="étudiant">Étudiant</option>
    <option value="salarié">Salarié</option>
    <option value="cadre">Cadre</option>
    <option value="auto-entrepreneur">Auto-entrepreneur</option>
    <option value="artiste">Artiste</option>
    <option value="artiste">Sans-emploi</option>
    <option value="autre">Autre</option>
  </select>
  <br></br>
  <br></br>
  <br></br>

  {/* <section className="checkbox">
    <label>Quel est votre statut matrimonial ?</label><br></br>
    <br></br>
    <label>
      <input className="a" type="checkbox" name="célibataire"  required/>célibataire
     </label><br></br>
    <label>
      <input className="a" name="" value="" type="checkbox"></input>
    </label><br></br>
    <label>
      <input className="b" type="checkbox" name="" value="test"></input>
    </label><br></br>
    <label>
      <input className="c" type="checkbox" name="" value=""></input>
    </label><br></br>
    <label>
      <input className="d" type="checkbox" name="" value=""></input>
    </label><br></br>
    <label>
      <input className="e" type="checkbox" name="" value=""></input>
    </label><br></br>
  </section> */}

  <br></br>
  <br></br>
  <label>Quel est votre statut matrimonial ?</label><br></br>
  <br></br>
  <label for="yes">
  <label>
      <input className="yes" type="radio" name="yes,no,maybe"  required/>célibataire
     </label><br></br>
    </label><br></br>

    <label for="mariée">
    <label>
      <input className="yes" type="radio" name="yes,no,maybe"  required/>Marier
     </label><br></br>
    </label><br></br>

    <label for="veuve">
    <label>
      <input className="yes" type="radio" name="yes,no,maybe"  required/>Veuve
     </label><br></br>
    </label><br></br>

    <label for="divorcée">
    <label>
      <input className="yes" type="radio" name="yes,no,maybe"  required/>Divorcer
     </label><br></br>
    </label><br></br>

     <br></br>
     <br></br>
     <br></br>
    <label>Enfant à charge:</label><br></br>
    <br></br>
  <select id="dropdown">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6 +</option>
  </select>
  <br></br>
  <br></br>
  <br></br>

  <div className="txtb">
    <br></br>
    <br></br>
    <label>Autres suggestions:</label>
    <textarea height="30px"></textarea>
  </div>

  <button type="button" value="submit" id="submit">Envoyer</button>
                                    
                                    
                                    </form>
                                    
                                    
                                </div>
                        
                      
</div>
        
        
    );
}

export default Cards;


