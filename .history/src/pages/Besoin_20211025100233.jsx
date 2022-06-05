import React from 'react';
import  '../components/styles/Besoin.css';
// import { IoShirtOutline } from 'react-icons/io';
import { AiOutlineSkin } from 'react-icons/ai';
import HeaderDev from '../components/HeaderDev';



function Besoin(props) {
    return (
        <div>
            <h1>Besoin</h1>
            <HeaderDev />

    
 
<body>
  <div className="main-holder d-flex flex-wrap justify-content-center align-items-center">
\      <div className="d-flex flex-wrap col-12">
        
        <div className="category category-1 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-1"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/home.png"} className="img-responsive card-img" />
          <p className="card-text">Se Loger</p>
        </div>
                
        <div className="category category-2 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-2"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/eat.png"} className="img-responsive card-img" />
          <p className="card-text">Se Nourrir</p>
        </div>
             
        <div className="category category-3 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-3"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/medical.png"} className="img-responsive card-img" />
          <p className="card-text">Se Soigner</p>
        </div>
           
        <div className="category category-4 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-4"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/map.png"} className="img-responsive card-img" />
          <p className="card-text">Se Déplacer</p>
        </div>
               
        <div className="category category-5 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-5"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/shirt.png"} className="img-responsive card-img" />
             <p className="card-text">S'habiller</p>
        </div>
            
        <div className="category category-6 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-6"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/ask.png"} className="img-responsive card-img" />
          <p className="card-text">S'informer</p>
        </div>


        <div className="category category-4 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-4"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/book.png"} className="img-responsive card-img" />
          <p className="card-text">Apprendre</p>
        </div>
               
        <div className="category category-5 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-5"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/legal.png"} className="img-responsive card-img" />
          <p className="card-text">Aide Juridique</p>
        </div>
            
        <div className="category category-6 d-flex flex-column justify-content-center align-item-center">
          <div className="category-header category-header-6"></div>
          <img src={process.env.PUBLIC_URL+ "/assets/images/home.png"} className="img-responsive card-img" />
          <p className="card-text">Aide Administratif</p>
        </div>
             
       
      </div>
  </div>
</body>

        </div>
    );
}

export default Besoin;