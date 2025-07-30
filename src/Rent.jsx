import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";

import p1 from './img1.jpg'
import furniture from './furniture.png'
import bathroom from './bathroom.png'
import tenant from './tenant.png'
import available from './available.png'


import rent1 from './rent1.jpeg'
import rent2 from './rent2.webp'
import rent3 from './rent3.jpg'
import rent4 from './rent4.webp'
import rent5 from './rent5.jpeg'





export default function Rent() {
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

            <div className="card-group">
                <div className="card rounded-3 bg-body-secondary border-primary ms-5 me-5" style={{ width: "auto", height: "250px" }}>
                    <div className="card-body row g-0">
                        <div className="col-md-4">
                            <img src={rent1} className="img-fluid rounded-2 object-fit-cover" style={{ width: "300px", height: "200px" }} />
                            <p className='ms-5'>Owner: Manigreev</p>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center ">
                            <p className='ms-4'>2 BHK House for Rent in chittramma devi nagar Hyderabad</p>
                            <div className="bg-light rounded-5 shadow-sm d-flex flex-wrap gap-3 p-3 mb-3" style={{ maxWidth: "90%" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0 ">FURNISHING <br /><span className="fw-medium">Unfurnished</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={bathroom} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">BATHROOM <br /><span className="fw-medium">2</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-3">
                                    <img src={tenant} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">TENANT PREFERRED <br /><span className="fw-medium">Bachelors</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={available} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">AVAILABILITY <br /><span className="fw-medium">Immediately</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">CARPET AREA<br /><span className="fw-medium">850 sqft</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">FACING <br /><span className="fw-medium">East</span></p>
                                </div>
                            </div>
                            <p className='ms-4'>2 BHK, Residential House is availabe for Rent in, Hyderabad for 13,500</p>
                        </div>
                        <div className="col-md-2  text-center bg-light-subtle rounded-3 mb-3 ">
                            <p className='mt-3'><h4>$ 13,500</h4><a href="" className='fw-lighter'>Security Deposit</a></p>
                            <br />
                            <button type="button" class="btn btn-danger rounded-5">View details</button>
                            <br />
                            <br />
                            <button type="button" class="btn btn-outline-danger rounded-5">View details</button>
                        </div>
                    </div>
                </div>
            </div>

<br />



<div className="card-group">
                <div className="card rounded-3 bg-body-secondary border-primary ms-5 me-5" style={{ width: "auto", height: "250px" }}>
                    <div className="card-body row g-0">
                        <div className="col-md-4">
                            <img src={rent2} className="img-fluid rounded-2 object-fit-cover" style={{ width: "300px", height: "200px" }} />
                            <p className='ms-5'>Owner: Gopi</p>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center ">
                            <p className='ms-4'>Single Family Home for rent in kompally Hyderabad</p>
                            <div className="bg-light rounded-5 shadow-sm d-flex flex-wrap gap-3 p-3 mb-3" style={{ maxWidth: "90%" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0 ">FURNISHING <br /><span className="fw-medium">Furnished</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={bathroom} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">BATHROOM <br /><span className="fw-medium">2</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-3">
                                    <img src={tenant} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">TENANT PREFERRED <br /><span className="fw-medium">Family</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={available} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">AVAILABILITY <br /><span className="fw-medium">Immediately</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">CARPET AREA<br /><span className="fw-medium">1322 sqft</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">FACING <br /><span className="fw-medium">West</span></p>
                                </div>
                            </div>
                            <p className='ms-4'>Single Family Home is availabe for Rent in, Hyderabad for 15,500</p>
                        </div>
                        <div className="col-md-2  text-center bg-light-subtle rounded-3 mb-3 ">
                            <p className='mt-3'><h4>$ 15,500</h4><a href="" className='fw-lighter'>Security Deposit</a></p>
                            <br />
                            <button type="button" class="btn btn-danger rounded-5">View details</button>
                            <br />
                            <br />
                            <button type="button" class="btn btn-outline-danger rounded-5">View details</button>
                        </div>
                    </div>
                </div>
            </div>

<br />


<div className="card-group">
                <div className="card rounded-3 bg-body-secondary border-primary ms-5 me-5" style={{ width: "auto", height: "250px" }}>
                    <div className="card-body row g-0">
                        <div className="col-md-4">
                            <img src={rent3} className="img-fluid rounded-2 object-fit-cover" style={{ width: "300px", height: "200px" }} />
                            <p className='ms-5'>Owner: Vamsi Krishna</p>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center ">
                            <p className='ms-4'>4 BHK Villa for Rent in Tellapur, Outer Ring Road Hyderabad</p>
                            <div className="bg-light rounded-5 shadow-sm d-flex flex-wrap gap-3 p-3 mb-3" style={{ maxWidth: "90%" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0 ">FURNISHING <br /><span className="fw-medium">Furnished</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={bathroom} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">BATHROOM <br /><span className="fw-medium">5</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-3">
                                    <img src={tenant} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">TENANT PREFERRED <br /><span className="fw-medium">Bachelors/Family</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={available} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">AVAILABILITY <br /><span className="fw-medium">From Mar 25</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">CARPET AREA<br /><span className="fw-medium">4000 sqft</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">FACING <br /><span className="fw-medium">East</span></p>
                                </div>
                            </div>
                            <p className='ms-4'>4 BHK, Villa is availabe for Rent in Tellapur, Hyderabad for 30,500</p>
                        </div>
                        <div className="col-md-2  text-center bg-light-subtle rounded-3 mb-3 ">
                            <p className='mt-3'><h4>$ 30,500</h4><a href="" className='fw-lighter'>Security Deposit</a></p>
                            <br />
                            <button type="button" class="btn btn-danger rounded-5">View details</button>
                            <br />
                            <br />
                            <button type="button" class="btn btn-outline-danger rounded-5">View details</button>
                        </div>
                    </div>
                </div>
            </div>

<br />


<div className="card-group">
                <div className="card rounded-3 bg-body-secondary border-primary ms-5 me-5" style={{ width: "auto", height: "250px" }}>
                    <div className="card-body row g-0">
                        <div className="col-md-4">
                            <img src={rent4} className="img-fluid rounded-2 object-fit-cover" style={{ width: "300px", height: "200px" }} />
                            <p className='ms-5'>Owner: Rakesh</p>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center ">
                            <p className='ms-4'>Apartment for Rent in Jubilee Hills Hyderabad</p>
                            <div className="bg-light rounded-5 shadow-sm d-flex flex-wrap gap-3 p-3 mb-3" style={{ maxWidth: "90%" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0 ">FURNISHING <br /><span className="fw-medium">Furnished</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={bathroom} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">BATHROOM <br /><span className="fw-medium">1-3</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-3">
                                    <img src={tenant} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">TENANT PREFERRED <br /><span className="fw-medium">Bachelors/Family</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={available} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">AVAILABILITY <br /><span className="fw-medium">From June 12</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">CARPET AREA<br /><span className="fw-medium">685-1,180 sqft</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">FACING <br /><span className="fw-medium">South</span></p>
                                </div>
                            </div>
                            <p className='ms-4'>Apartment, is availabe for Rent in Jubilee Hills, Hyderabad for 50,500</p>
                        </div>
                        <div className="col-md-2  text-center bg-light-subtle rounded-3 mb-3 ">
                            <p className='mt-3'><h4>$ 50,500</h4><a href="" className='fw-lighter'>Security Deposit</a></p>
                            <br />
                            <button type="button" class="btn btn-danger rounded-5">View details</button>
                            <br />
                            <br />
                            <button type="button" class="btn btn-outline-danger rounded-5">View details</button>
                        </div>
                    </div>
                </div>
            </div>

<br />


<div className="card-group">
                <div className="card rounded-3 bg-body-secondary border-primary ms-5 me-5" style={{ width: "auto", height: "250px" }}>
                    <div className="card-body row g-0">
                        <div className="col-md-4">
                            <img src={rent5} className="img-fluid rounded-2 object-fit-cover" style={{ width: "300px", height: "200px" }} />
                            <p className='ms-5'>Owner: Krishna</p>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center ">
                            <p className='ms-4'>2 BHK House for Rent in Dulapally Hyderabad</p>
                            <div className="bg-light rounded-5 shadow-sm d-flex flex-wrap gap-3 p-3 mb-3" style={{ maxWidth: "90%" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0 ">FURNISHING <br /><span className="fw-medium">Unfurnished</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={bathroom} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">BATHROOM <br /><span className="fw-medium">3</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-3">
                                    <img src={tenant} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">TENANT PREFERRED <br /><span className="fw-medium">Bachelors</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={available} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">AVAILABILITY <br /><span className="fw-medium">Immediately</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">CARPET AREA<br /><span className="fw-medium">850 - 1100 sqft</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-2 ms-5">
                                    <img src={furniture} alt="" style={{ width: "20px", height: "25px" }} />
                                    <p className="mb-0">FACING <br /><span className="fw-medium">South</span></p>
                                </div>
                            </div>
                            <p className='ms-4'>2 BHK, Residential House is availabe for Rent in Hyderabad for 12,500</p>
                        </div>
                        <div className="col-md-2  text-center bg-light-subtle rounded-3 mb-3 ">
                            <p className='mt-3'><h4>$ 12,500</h4><a href="" className='fw-lighter'>Security Deposit</a></p>
                            <br />
                            <button type="button" class="btn btn-danger rounded-5">View details</button>
                            <br />
                            <br />
                            <button type="button" class="btn btn-outline-danger rounded-5">View details</button>
                        </div>
                    </div>
                </div>
            </div>

<br />
            

        </>
    )
}
