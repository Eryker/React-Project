import React from 'react';
import  '../components/styles/Besoin.css';

function Besoin(props) {
    return (
        <div>
            <h1>Besoin</h1>
            <!-- <!DOCTYPE html> -->
<html lang="en-US">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Anuj Yadav" />
  <meta name="description" content="Upgrade to premium card" />
  <title>Search</title>
</head>

<body>
  <div class="main-holder d-flex flex-wrap justify-content-center align-items-center">
    <input type="text" class="serach-input" placeholder="Search" />
      <div class="d-flex flex-wrap col-12">
        <!-- card 1 starts -->
        <div class="category category-1 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-1"></div>
          <img src="https://i.ibb.co/HF8tZk7/home.png" class="img-responsive card-img" />
          <p class="card-text">Property</p>
        </div>
                
        <div class="category category-2 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-2"></div>
          <img src="https://i.ibb.co/NnvW3pH/car.png" class="img-responsive card-img" />
          <p class="card-text">Cars</p>
        </div>
             
        <div class="category category-3 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-3"></div>
          <img src="https://i.ibb.co/bRMq2Gs/boat.png" class="img-responsive card-img" />
          <p class="card-text">Boat</p>
        </div>
           
        <div class="category category-4 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-4"></div>
          <img src="https://i.ibb.co/jDpfGwL/cycle.png" class="img-responsive card-img" />
          <p class="card-text">Bike</p>
        </div>
                <!-- card 4 ends -->
         <!-- card 5 starts -->
        <div class="category category-5 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-5"></div>
          <img src="https://i.ibb.co/Dzv2vFB/camera.png" class="img-responsive card-img" />
          <p class="card-text">Ticket</p>
        </div>
                <!-- card 5 ends -->
        <!-- card 6 starts -->
        <div class="category category-6 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-6"></div>
          <img src="https://i.ibb.co/Dzv2vFB/camera.png" class="img-responsive card-img" />
          <p class="card-text">Economy</p>
        </div>
                <!-- card 6 ends -->
       
      </div>
  </div>
</body>

</html>
        </div>
    );
}

export default Besoin;