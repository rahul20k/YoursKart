import React from 'react'
import { Footer, Navbar } from "../components";
import '../style.css'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">ABOUT</h1>
        <hr />
        <h6 className="about-h6">
						CATERING TO YOUR REQUIREMENTS, HANDLING YOUR NEEDS WITH CARE
					</h6>
					
					<p className="about-p">
						Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience. Forget about struggling to do everything at once: taking care of the family, running your business, walking your dog, cleaning the house, doing the shopping, etc. Purchase the goods you need every day or just like in a few clicks or taps, depending on the device you use to access the Internet. We work to make your life more enjoyable.		
					</p>
        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3">
				
					<div className="div3-inside">							
						<h6 className="div3-inside-h6">14500</h6>
						<p className="div3-inside-p">PRODUCTS AVAILABLE</p>
					</div>					
				
					<div className="div3-inside">
						<h6 className="div3-inside-h6">81%</h6>
						<p className="div3-inside-p">CLIENTS COME BACK</p>						
					</div>					
				
					<div className="div3-inside">
						<h6 className="div3-inside-h6">10 mlns</h6>
						<p className="div3-inside-p">SITE MEMBERS</p>					
					</div>	
					
				</div>	
				
				<div className="div4">
					<p className="div4-p">STORE EVENTS</p>
				</div>				
				<div class="div5">
				
					<div class="div5-inside">
							<div class="div5-inside-img">
								
							</div>						
							<div class="div5-inside-text">
								<h6 className="div5-inside-text-h6">
									THE HIGHEST QUALITY OF PRODUCTS
								</h6>
								
								<p className="div5-inside-text-p">
									We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>								
							</div>						
					</div>					
				
					<div class="div5-inside">
						<div class="div5-inside-img">
								
							</div>				
							<div class="div5-inside-text">
								<h6 className="div5-inside-text-h6">
									FOR CONVENIENCE OF CHOICE
								</h6>
								
								<p className="div5-inside-text-p">
								We think about the convenience of your choice. Our products are supplied with star rating that should help hesitant buyers to take a decision. What’s more, you can search our site if you know exactly what you are looking for or use a bunch of different filters that will considerably save your time and efforts
								</p>
							</div>							
					</div>					
				
					<div class="div5-inside">
							<div class="div5-inside-img">
								
							</div>					
							<div class="div5-inside-text">
								<h6 className="div5-inside-text-h6">
									DELIVERY TO ALL REGIONS
								</h6>
								
								<p className="div5-inside-text-p">
									We deliver our goods worldwide. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.</p>								
							</div>						
					</div>
					
				</div>	
      <Footer />
    </>
  )
}

export default AboutPage