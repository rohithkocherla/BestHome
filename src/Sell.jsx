import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import sell from './sell.jpg'

import sel1 from './sel1.jpg'
import sel2 from './sel2.jpeg'
import sel3 from './sel3.jpeg'

import sell1 from './sell1.png'
import sell2 from './sell2.avif'
import sell3 from './sell3.jpg'
import sell4 from './sell4.jpg'






















export default function Sell() {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">RealtorMagic</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/buy">Buy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sell">Sell</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/rent">Rent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active btn btn-dark btn-sm text-white rounded-5" to="/register">Sign up</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <br />
            <br />

            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sell} className="d-block w-100 " style={{ height: "400px", objectFit: "cover" }} alt="..." />
                        <div className="position-absolute top-50 start-50 translate-middle text-black fw-bold fs-3">
                            <h1 className='fw-bold text-center'>Get free proposals<br />from local agents</h1>
                            <p className='fw-light'>Find a trusted expert, no obligations.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />



            <div className="card-group ">
                <div className="card rounded-3 bg-body-secondary  ms-3 me-5" style={{ width: "auto", height: "auto" }}>
                    <img src={sel1} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                    <div className="card-body d-flex">
                        <div>
                        <h6><span className='text-danger'>Real</span>Choice Selling</h6>
                            <h2 className="card-text ">Pick the right agent for you </h2>
                            <p>Answer a few questions and get a list of top agents in your area. Compare their costs and services, and choose the right agent for you.</p>
                            <div className="d-flex flex-column justify-content-center mt-5">
                                <button className="btn btn-primary rounded-5 " type="button">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card rounded-3 bg-body-secondary  ms-5 me-5" style={{ width: "auto", height: "auto" }}>
                    <img src={sel2} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                    <div className="card-body d-flex">
                        <div>
                            <h6>Seller's Marketplace</h6>
                            <h2 className="card-text ">Get offers for your home</h2>
                            <p>Visit Seller's MarketPlace to find out how you can sell without listing or stay in your home while you finance the purchases of your next one.</p>
                            <div className="d-flex flex-column justify-content-center mt-5">
                                <button className="btn btn-outline-primary rounded-5 " type="button">Visit Seller's Marketplace</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card rounded-3 bg-body-secondary   ms-5 me-3" style={{ width: "auto", height: "auto" }}>
                    <img src={sel3} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                    <div className="card-body d-flex">
                        <div>
                            <h6><span className='text-danger'>Real</span>Estimate</h6>
                            <h2 className="card-text ">Track your home value over time</h2>
                            <p>Stay informed about your home's worth with RealEstimate. Monitor your property's valuation and compare it to similar homes in your area for valuable market insights.</p>
                            <div className="d-flex mt-4" role="search">
                                <input className="form-control  rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className='bg-body-tertiary'>
                <br />
                <h2 className='ms-5'>Seller guides</h2>
                <br />
                <div className="card-group ">
                    <div className="card rounded-3 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
                        <img src={sell1} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                        <div className="card-body d-flex">
                                <h4>Should I sell my home now?</h4>
                        </div>
                    </div>

                    <div className="card rounded-3 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
                        <img src={sell2} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                        <div className="card-body d-flex">
                            <h4>How much is my home worth?</h4>
                        </div>
                    </div>

                    <div className="card rounded-3 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
                        <img src={sell3} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                        <div className="card-body d-flex">
                            <h4>How should I sell my home?</h4>
                        </div>
                    </div>

                    <div className="card rounded-3 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
                        <img src={sell4} className="card-img-top rounded-2 rounded-bottom-2 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
                        <div className="card-body d-flex">
                            <h4>How to prepare your home for sale?</h4>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>

            <br />
            <br />

            <div className='container1'>
                <h2 className='ms-5'>Seller tools</h2>
                <br />
                <h6 className='ms-5'>Track your home value with My Home</h6>
                <br />
                <h6 className='ms-5'>Explore your selling options in the Seller's Marketplace</h6>
                <br />
                <h6 className='ms-5'>Find an agent to list your home </h6>
            </div>



        </>
    )
}
