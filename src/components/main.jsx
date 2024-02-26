import React from "react";
import '../style.css'


const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3" style={{ marginTop: '40px' }}>
        <div className="card bg-dark text-white border-0 mx-3">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./assets/main.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="./assets/main2.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="./assets/main3.jpg" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      
    
    </>
  );
};

export default Home;
