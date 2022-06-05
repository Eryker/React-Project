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
                                <h1>Welcome to the white box Animation</h1>
                                <h2 id="description">"survey for future of animated movies"</h2>
                            </div>
                                    
                                <form id="Survey-form">
                            
                                <label id="name-label">full name:</label>
  <input id="name" class="area" type="text" name="full name" value="" placeholder="" required></input>


  <label id="email-lavel">email id:</label>
  <input id="email" class="area" type="email" name="email id" value="" placeholder="" required></input>


  <label id="number-label">age:</label>
  <input id="number" class="area" type="number" name="age" min="12" max="99" value="" placeholder="" required></input>

  <br></br>
  <br></br>
                                    
                                    
                                    </form>
                                    
                                    
                                </div>
                        
                      
</div>
        
        
    );
}

export default Cards;


