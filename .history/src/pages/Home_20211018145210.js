import React from 'react';
import Cards from '../components/Cards';
import  '../components/styles/Home.css';
import {
    
    Link
  } from "react-router-dom";

function Home(props) {
    return (
        <div className="homecss"  
        style={{backgroundImage: "url('/assets/images/camp-nou-4.jpg')", 
        backgroundRepeat: 'no-repeat',
        
        }}>
        

            <h1>home page</h1> 
            <Link to="/homepage">
        <h
    </Link>

            <div className="cards">



            <Cards title="hello world" text="Bonjour ibra"/>
            <Cards title="hello everybody" text="hi oumar"/>

            </div>
            
          
            
        </div>
    );
}

export default Home;