import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../style.css'

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const state = useSelector(state => state.handleCart)
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                    <img
                        className="card-img img-fluid"
                        src="./assets/BannerLogo.png"
                        alt="Card"
                        width={250}
                    />
                </NavLink>
                     
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" width="25%">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item" style={{ marginTop: '6px', marginLeft: '80px' }}>
                        <div
                            className={`image-container ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            <input className="h-[60%] w-[100%] bg-[#F5F5F6] rounded pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]"
                            type="text" 
                            placeholder="Search for products,brands and many more"
                            />
                            {isHovered ? (
                             <img 
                                src="./assets/search2.png"  
                                alt="Search"
                                style={{ marginLeft: '15px', width: '30px', height: '30px' }}
                            />
                            ) : (
                                <img 
                                src="./assets/search.png"  
                                alt="Search"
                                style={{ marginLeft: '15px', width: '30px', height: '30px' }}
                            />
                            )}
                            </div>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar ;