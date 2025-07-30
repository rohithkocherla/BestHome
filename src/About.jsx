import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import buy1 from './buy1.webp'
import buy2 from './buy2.webp'
import buy3 from './buy3.webp'
import buy4 from './buy4.webp'
import insta from './insta.png'
import phone from './phone.svg'
import twitter from './twitter.svg'
import linkin from './link.svg'
import male from './male.svg'


export default function About() {
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
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <br />
            <br />

            <div>
                <h3 className='ms-5'>About Us </h3>

                <div><p className='ms-5'>Welcome to Realtor Magic, your trusted partner in real estate management. Our mission is to provide seamless property management solutions that maximize value, enhance efficiency, and ensure a hassle-free experience for property owners and tenants alike. </p></div>

                <div>
                    <h3 className='ms-5'>Who We Are</h3>
                    <p className='ms-5'> We are a team of dedicated real estate professionals with expertise in property management, tenant relations, maintenance, and financial planning. Our innovative approach and technology-driven solutions help property owners streamline operations while ensuring tenants enjoy a high-quality living or working environment. </p>
                </div>
                <div>
                    <h3 className='ms-5'>What We Do </h3>
                    <p className='ms-5'><ul><li> Property Management: We handle all aspects of property maintenance, rent collection, and tenant management. </li>
                        <li>Tenant Relations: Ensuring smooth communication and a positive rental experience for tenants.</li>
                        <li>Financial Management: Tracking expenses, rental income, and preparing reports for property owners.  </li>
                        <li>Legal Compliance: Keeping up with property laws and regulations to protect owner interests.  </li>
                        <li>Investment Consulting: Helping investors make informed real estate decisions to maximize returns.</li></ul>
                    </p>
                </div>
                <div>
                    <h3 className='ms-5'> Our Commitment</h3>
                    <p className='ms-5'><ul><li> At Realtor Magic, we prioritize transparency, professionalism, and customer satisfaction. Whether you're a property owner looking for reliable management services or a tenant searching for a well-maintained space, we are here to serve you. </li>
                        <li>Let us handle the complexities of real estate management so you can enjoy peace of mind and financial growth. Contact us today to learn more! </li></ul></p>
                </div>
            </div>


            <div className="card-group m-5">
                <div className="card rounded-4 bg-info-subtle ms-5 me-5" >
                    <div className="d-flex justify-content-center">
                        <img src={male}
                            className="card-img-top rounded-5 mt-3"
                            alt="Profile Icon"
                            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h4>Manigreev Jaidi</h4>
                        <div className="d-flex justify-content-center gap-3 mt-2 ">
                            <a href="https://www.instagram.com/"> <img src={insta} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.instagram.com/"> <img src={phone} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://x.com/manigreev_jaidi?s=11"> <img src={twitter} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.linkedin.com/in/manigreev-jaidi-b437b0252/"> <img src={linkin} alt="" style={{ width: "30px", height: "30px" }} /></a>
                        </div>
                    </div>
                </div>

                <div className="card rounded-4 bg-info-subtle ms-5 me-5" >
                <div className="d-flex justify-content-center">
                        <img src={male}
                            className="card-img-top rounded-5 mt-3"
                            alt="Profile Icon"
                            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h4>Vamsi Krishna</h4>
                        <div className="d-flex justify-content-center gap-3 mt-2 ">
                            <a href="https://www.instagram.com/"> <img src={insta} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.instagram.com/"> <img src={phone} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://x.com/manigreev_jaidi?s=11"> <img src={twitter} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.linkedin.com/in/manigreev-jaidi-b437b0252/"> <img src={linkin} alt="" style={{ width: "30px", height: "30px" }} /></a>
                        </div>
                    </div>
                </div>

                <div className="card rounded-4 bg-info-subtle ms-5 me-5" >
                <div className="d-flex justify-content-center">
                        <img src={male}
                            className="card-img-top rounded-5 mt-3"
                            alt="Profile Icon"
                            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h4>Chaitanya</h4>
                        <div className="d-flex justify-content-center gap-3 mt-2 ">
                            <a href="https://www.instagram.com/"> <img src={insta} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.instagram.com/"> <img src={phone} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://x.com/manigreev_jaidi?s=11"> <img src={twitter} alt="" style={{ width: "30px", height: "30px" }} /></a>
                            <a href="https://www.linkedin.com/in/manigreev-jaidi-b437b0252/"> <img src={linkin} alt="" style={{ width: "30px", height: "30px" }} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
