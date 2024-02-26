import React from "react";
import '../style.css'

const Footer = () => {
  return (
    <>
      <footer>
  <div className="footer-container">
    <div className="footer-text">
      <h1>
        YoursKart<span id="clothing">Collection</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit aadipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="footer-menu">
      <h6>INFORMATION</h6>
      <a href="AboutUs.html">HOME</a>
      <br />
      <a href="AboutUs.html">SEARCH</a>
      <br />
      <a href="AboutUs.html">ABOUT US</a>
      <br />
      <a href="contactUs.html">CONTACT US</a>
      <br />
    </div>
    <div className="footer-menu">
      <h6>PRODUCTS</h6>
      <a href="men.html">MEN</a>
      <br />
      <a href="women.html">WOMEN</a>
      <br />
      <a href="children.html">CHILDREN</a> <br />
    </div>
    <div className="footer-menu">
      <h6>DESIGNERS</h6>
      <a href="https://www.channel.com">CHANNEL</a>
      <br />
      <a href="https://www.armani.com">ARMANI</a>
      <br />
      <a href="https://www.dolce-gabbana.com">D &amp; G</a>
      <br />
      <a href="https://www.versace.com">VERSACE</a>
      <br />
      <a href="https://www.gucci.com">GUCCI</a>
      <br />
      <a href="https://www.prada.com">PRADA</a>
      <br />
      <a href="https://www.calvinklein.com">CALVIN KLEIN</a>
      <br />
    </div>
    <div className="footer-email">
      <div className="email-container">
        <h6>NEWSLATTER</h6>
        <input type="text" id="input" placeholder="Enter Your Email" />
        <input type="submit" value="GO!" id="send" />
      </div>
      <div className="social-container"></div>
    </div>
  </div>
  <div className="copyright-container">
    <p>© 2024 YoursKart. All Rights Reserved By 00003732.</p>
    <a href="report.docx" className="report">
      REPORT
    </a>
  </div>
</footer>

    </>
  );
};

export default Footer;
