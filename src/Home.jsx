import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import Signup from './Signup'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";


import p1 from './img1.jpg'
import p2 from './img2.webp'
import fea1 from './fea1.jpg'
import fea2 from './fea2.jpg'
import fea3 from './fea3.jpg'
import fea4 from './fea4.jpg'

import top1 from './top1.jpg'
import top2 from './top2.jpg'
import top3 from './top3.jpg'
import top4 from './top4.jpg'

import new1 from './new1.jpg'
import new2 from './new2.jpg'
import new3 from './new3.jpg'
import new4 from './new4.jpg'
import new5 from './new5.jpg'
import new6 from './new6.jpg'




export default function Home() {
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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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

      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={p1} className="d-block w-100 " style={{ height: "400px", objectFit: "cover" }} alt="..." />
            <div className="position-absolute top-50 start-50 translate-middle text-black fw-bold fs-3">
              <h1>The #1 site real estate <br />professionals trust</h1>
            </div>
          </div>
        </div>
        
      </div>

      <br />
      <br />

      <h2 className='text-center bg-primary-subtle'>Featured Projects</h2>
      <br />

      <div className="card-group ">
        <div className="card rounded-4 bg-body-secondary ms-5 me-2" style={{ width: "auto", height: "auto" }}>
          <img src={fea1} className="card-img-top rounded-top-4 " alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>The Right Life </h4>by Neobuild Ventures LLP <br /> Sarjapur Road, Bangalore <br /> Marketed by neobuild Ventures LLP</p>
            </div>
            <div className="ms-5">
              <p>3 BHK Flats <br /><span className='fw-medium'>$ 1.57 Cr</span> onwards</p>
              <br />
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
        <div className="card rounded-4 bg-body-secondary ms-3 me-5" style={{ width: "auto", height: "auto" }}>
          <img src={fea2} className="card-img-top rounded-top-4 " alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>Amrutha Platinum Towers </h4>by Amrutha Rama Constructions Pvt. Ltd. <br /> WhiteField, Bangalore <br /> Marketed by Amrutha Rama Constructions Pvt. Ltd.</p>
            </div>
            <div className="ms-5">
              <p>2,3 BHK Flats <br /><span className='fw-medium'>$ 1.20 Cr</span> onwards</p>
              <br />
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
      </div>
<br />
      <div className="card-group ">
      <div className="card rounded-4 bg-body-secondary ms-5 me-2" style={{ width: "auto", height: "auto" }}>
          <img src={fea3} className="card-img-top rounded-top-4 " alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>Bhoo Aabharana </h4>by Bhoo Developers <br /> Banjara Hills, Hyderabad <br /> Marketed by Bhoo Developers</p>
            </div>
            <div className="ms-5">
              <p>2,3 BHK Flats <br /><span className='fw-medium'>$ 79.3 Lac</span> onwards</p>
              <br />
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
        <div className="card rounded-4 bg-body-secondary ms-3 me-5" style={{ width: "auto", height: "auto" }}>
          <img src={fea4} className="card-img-top rounded-top-4 " alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>Sumadhura Capitol Residence </h4>by Sumadhura Infracon Pvt. Ltd. <br /> Bandra, Mumbai <br /> Marketed by Sumadhura Infracon Pvt. Ltd.</p>
            </div>
            <div className="ms-5">
              <p>3,4 BHK Flats <br /><span className='fw-medium'>$ 2.69 Cr</span> onwards</p>
              <br />
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
      </div>


<br />
<br />

<h2 className='text-center bg-primary-subtle'>Top Projects</h2>
<br />

<div className="card-group ">
      <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
          <img src={top1} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>HM Scottsville </h4>HM Group <br /> Sarjapur Road, Bangalore </p>
              <p>2,3 BHK Flats <br /> <span className='fw-medium'>$1.70 Cr</span> onwards</p>
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
        <div className="card rounded-4 bg-body-secondary ms-1 me-2" style={{ width: "auto", height: "auto" }}>
          <img src={top2} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>SBR One Residence</h4>SBR Group <br />Hyderabad, Telangana</p>
              <p>2,3 BHK Flats <br /> <span className='fw-medium'>$1.69 Cr</span> onwards</p>
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>

        <div className="card rounded-4 bg-body-secondary ms-1 me-2" style={{ width: "auto", height: "auto" }}>
          <img src={top3} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>Orchid Bloomsberry </h4>by Goyal & Co and Hariyana Group <br />Panathur, Bangalore</p>
              <p>2,3 BHK Flats <br /> <span className='fw-medium'>$1.32 Cr</span> onwards</p>
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>

        <div className="card rounded-4 bg-body-secondary ms-1 me-3" style={{ width: "auto", height: "auto" }}>
          <img src={top4} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
          <div className="card-body d-flex">
            <div>
              <p className="card-text "> <h4>Binary Temple Tree</h4>Binary Realty <br />Vizag, Andhrapradesh</p>
              <p>3 BHK Flats <br /> <span className='fw-medium'>$1.20 Cr</span> onwards</p>
              <button type="button" class="btn btn-outline-primary">View details</button>
            </div>
          </div>
        </div>
      </div>
<br />
<br />

<h2 className='text-center bg-primary-subtle'>New Project Gallery</h2>
<br />

<div className="card-group">
  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new1} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>Raaga By Bhavisha Homes</h4>
        <p className="mb-1">Bhavisha Properties</p>
        <p className="text-muted">Sarjapur Road</p>
        <p>3 BHK Flats <br /> <span className="fw-medium">$1.27 Cr</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>

  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new2} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>Bhavisha Meadows Phase-2</h4>
        <p className="mb-1">Bhavisha Properties</p>
        <p className="text-muted">Chandapura</p>
        <p>2,3 BHK Flats <br /> <span className="fw-medium">$57.8 Lac</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>

  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new3} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>Mahidhara Harmony</h4>
        <p className="mb-1">Mahindra Projects Pvt Ltd</p>
        <p className="text-muted">Sarjapur Road</p>
        <p>3,4 BHK Villas <br /> <span className="fw-medium">$ 2 Cr</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>
</div>


<br />

<div className="card-group">
  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new4} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>DSR The Courtyard</h4>
        <p className="mb-1">DSR Infrastructure Pvt Ltd</p>
        <p className="text-muted">Sarjapur Road</p>
        <p>2,3 BHK Flats <br /> <span className="fw-medium">$ 97.6 Lac</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>

  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new5} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>Abhee Pride</h4>
        <p className="mb-1">Abhee Ventures Pvt Ltd</p>
        <p className="text-muted">Chandapura</p>
        <p>2,3 BHK Flats <br /> <span className="fw-medium">$73.9 Lac</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>

  <div className="card rounded-4 bg-body-secondary ms-3 me-1" style={{ width: "auto", height: "auto" }}>
    <div className="card-body row g-0"> 
      <div className="col-md-5">
        <img 
          src={new6} 
          className="img-fluid rounded-2 h-100 w-100 object-fit-cover" 
          alt=""
        />
      </div>
      <div className="col-md-7 d-flex flex-column justify-content-center p-3">
        <h4>Abhee Celestial City</h4>
        <p className="mb-1">Abhee Ventures Pvt Ltd</p>
        <p className="text-muted">Sarjapur Road</p>
        <p>2,3 BHK Flats <br /> <span className="fw-medium">$1.51 Cr</span> onwards</p>
        <button type="button" className="btn btn-outline-primary">View details</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
