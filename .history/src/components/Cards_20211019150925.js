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
                                        <input id="name" class="area"  type="text" name="full name" value="" placeholder="" required></input>
                                
                            
                                        <label id="email-lavel">email id:</label>
                                        <input id="email" class="area" type="email" name="email id" value="" placeholder="" required></input>
                                
                                
                                        <label id="number-label">age:</label>
                                        <input id="number" class="area" type="number" name="age" min="12" max="99" value="" placeholder="" required></input>

                                    <br></br>
                                    <br></br>	
                                    <label>what describes you the best:</label><br></br>
                                    <select id="dropdown">
                                        <option value="student">student</option>
                                        <option value="teacher">teacher</option>
                                        <option value="professional">professional</option>
                                        <option value="businessman">businessman</option>
                                        <option value="artist">artist</option>
                                    </select>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <section className="checkbox">
                                        <label>Which type of animation you love to watch?</label><br></br>
                                        <label>
                                        <input className="a" name="" value="" type="checkbox">&nbsp;&nbsp;2D Animation</input>
                                        </label><br></br>
                                        <label>
                                        <input className="b" type="checkbox"  name="" value="">&nbsp;&nbsp;3D animation</input>
                                        </label><br></br>
                                        <label>
                                        <input className="c" type="checkbox"  name="" value="">&nbsp;&nbsp;Vector</input>
                                        </label><br></br>
                                        <label>
                                        <input className="d" type="checkbox"  name="" value="">&nbsp;&nbsp;Stop motion</input>
                                        </label><br></br>
                                        <label>
                                        <input className="e" type="checkbox"  name="" value="">&nbsp;&nbsp;Motion graphics</input>
                                        </label><br></br>
                                        </section>
                                    <br></br>
                                    <br></br>
                                    <label>Do you think animated movies will be the future of cinema?</label><br></br>
                                    <label for="yes">
                                        <input className="yes" type="radio" name="yes,no,maybe" value="yes" checked>&nbsp;&nbsp;yes</input></label><br></br>
                                    <label for="no">
                                        <input   className="no" type="radio" name="yes,no,maybe" value="no">&nbsp;&nbsp;no</input></label><br></br>
                                    <label for="maybe" >
                                        <input  className="maybe" type="radio" name="yes,no,maybe" value="maybe">&nbsp;&nbsp;may be</input></label><br></br>
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


