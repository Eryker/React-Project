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
                                <h2 id="description">"veuillez remplir le formulaire ci-joint"</h2>
                            </div>
                                    
                                <form id="Survey-form">
                            
                                <label id="name-label">Nom:</label>
                                <input id="name" className="area" type="text" name="Votre nom"  placeholder="Votre nom" required></input><br></br>

                                <br></br>

                                <label>
                                <input type="checkbox" name="marie"   required/> Marie
                                </label><br></br>



  <label id="email-lavel">Prénom:</label>
  <input id="email" class="area" type="text" name="prenom" value="" placeholder="Votre prénom" required></input>


  <label id="number-label">Âge:</label>
  <input id="number" class="area" type="number" name="âge" min="12" max="99" value="" placeholder="Votre âge" required></input>

  <br></br>
  <br></br>

  <label>Votre Statut actuel:</label><br></br>
  <select id="dropdown">
    <option value="étudiant">Étudiant</option>
    <option value="salarié">Salarié</option>
    <option value="cadre">Cadre</option>
    <option value="auto-entrepreneur">Auto-entrepreneur</option>
    <option value="artiste">artiste</option>
    <option value="autre">autre</option>
  </select>
  <br></br>
  <br></br>
  <br></br>

  <section className="checkbox">
    <label>Quel est votre statut matrimonial ?</label><br></br>
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
  </section>

  <br></br>
  <br></br>
  <label>Do you think animated movies will be the future of cinema?</label><br></br>
  <label for="yes">
    <input className="yes" type="radio" name="yes,no,maybe" value="yes" checked></input></label><br></br>
  <label for="no">
    <input className="no" type="radio" name="yes,no,maybe" value="no"></input></label><br></br>
  <label for="maybe">
    <input className="maybe" type="radio" name="yes,no,maybe" value="maybe"></input></label><br></br>
  <div className="txtb">
    <br></br>
    <br></br>
    <label>Any suggestions:</label>
    <textarea height="30px"></textarea>
  </div>

  <button type="button" value="submit" id="submit">submit</button>
                                    
                                    
                                    </form>
                                    
                                    
                                </div>
                        
                      
</div>
        
        
    );
}

export default Cards;


