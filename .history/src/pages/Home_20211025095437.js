import React from 'react';
import Cards from '../components/Cards';
import  '../components/styles/Home.css';
import HeaderDev from '../components/HeaderDev';

import {
    
    Link
  } from "react-router-dom";
  import { BsFillArrowLeftSquareFill } from "react-icons/bs";


function Home(props) {
    return (
        <div>
        

            <h1>home page</h1> 


            <Link to="/">
               <span className="fontSize"><BsFillArrowLeftSquareFill /></span> 
            </Link>
            <HeaderDev />




            <div className="cards">

            <Cards title="hello world" text="Bonjour ibra"/>

            </div>
            
          
            
        </div>
    );
}

export default Home;