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
                            
                                        <p id="name-p">full name:</p>
                                        <input id="name" class="area"  type="text" name="full name" value="" placeholder="" required></input>
                                
                            
                                        <p id="email-lavel">email id:</p>
                                        <input id="email" class="area" type="email" name="email id" value="" placeholder="" required></input>
                                
                                
                                        <p id="number-p">age:</p>
                                        <input id="number" class="area" type="number" name="age" min="12" max="99" value="" placeholder="" required></input>

                                    {/* <br></br>
                                    <br></br>	 */}
                                    <p>what describes you the best:</p>
                                    {/* <br></br> */}
                                    <select id="dropdown">
                                        <option value="student">student</option>
                                        <option value="teacher">teacher</option>
                                        <option value="professional">professional</option>
                                        <option value="businessman">businessman</option>
                                        <option value="artist">artist</option>
                                    </select>
                                    {/* <br></br>
                                    <br></br>
                                    <br></br> */}
                                    <section className="checkbox">
                                        <p>Which type of animation you love to watch?</p><br></br>
                                        <p>
                                        <input className="a" name="" value="" type="checkbox">&nbsp;&nbsp;2D Animation</input>
                                        </p>
                                        <br></br>
                                        <p>
                                        <input className="b" type="checkbox"  name="" value="">&nbsp;&nbsp;3D animation</input>
                                        </p>
                                        <br></br>
                                        <p>
                                        <input className="c" type="checkbox"  name="" value="">&nbsp;&nbsp;Vector</input>
                                        </p>
                                        <br></br>
                                        <p>
                                        <input className="d" type="checkbox"  name="" value="">&nbsp;&nbsp;Stop motion</input>
                                        </p>
                                        <br></br>
                                        <p>
                                        <input className="e" type="checkbox"  name="" value="">&nbsp;&nbsp;Motion graphics</input>
                                        </p><br></br>
                                        </section>
                                    {/* <br></br>
                                    <br></br> */}
                                    <p>Do you think animated movies will be the future of cinema?</p><br></br>
                                    <p for="yes">
                                        <input className="yes" type="radio" name="yes,no,maybe" value="yes" checked>&nbsp;&nbsp;yes</input></p>
                                        {/* <br></br> */}
                                    <p for="no">
                                        <input   className="no" type="radio" name="yes,no,maybe" value="no">&nbsp;&nbsp;no</input></p>
                                        {/* <br></br> */}
                                    <p for="maybe" >
                                        <input  className="maybe" type="radio" name="yes,no,maybe" value="maybe">&nbsp;&nbsp;may be</input></p>
                                        {/* <br></br> */}
                                    <div className="txtb">
                                        {/* <br></br>
                                        <br></br> */}
                                        <p>Any suggestions:</p>
                                    <textarea height="30px"></textarea>
                                    </div>
                                    
                                <button type="button" value="submit" id="submit">submit</button>
                                    
                                    
                                    
                                    </form>
                                    
                                    
                                </div>
                        
                      
</div>
        
        
    );
}

export default Cards;


