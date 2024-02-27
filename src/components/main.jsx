import React, { useEffect, useState } from "react";
import '../style.css'


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="hero border-1 pb-3" style={{ marginTop: '40px' }}>
      <div className="card bg-dark text-white border-0 mx-3">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
          <div>
            <div className="banner1">
                  <p className="banner1-p">SPRING - SUMMER 2024</p>
                    <h6 className="banner1-h6">NEW <br /> ARRIVALS</h6>
                    <a className="banner1-a">COMING SOON!</a>
                    </div>
            </div>
            <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
              <img src="./assets/main.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
              <img src="./assets/main2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
              <img src="./assets/main3.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="FreeShippingBanner-sidebar FreeShippingBanner-sidebar-collapsed">
        <div className="FreeShippingBanner-arrow FreeShippingBanner-arrow-collapsed"></div>
        <p className="FreeShippingBanner-sidebar-content">FLAT 200 OFF</p>
      </div>
    </div>
  </div>
  );
};

export default Home;
