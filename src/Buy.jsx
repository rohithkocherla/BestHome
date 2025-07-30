import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import p1 from './img1.jpg'
import buy from './buy.jpg'
import buy1 from './buy1.webp'
import buy2 from './buy2.webp'
import buy3 from './buy3.webp'
import buy4 from './buy4.webp'

import lux1 from './lux1.webp'
import lux2 from './lux2.webp'
import lux3 from './lux3.webp'
import lux4 from './lux4.jpg'

import nl1 from './nl1.jpeg'
import nl2 from './nl2.jpeg'
import nl3 from './nl3.jpeg'
import nl4 from './nl4.jpeg'

import up1 from './up1.jpeg'
import up2 from './up2.jpeg'
import up3 from './up3.jpeg'
import up4 from './up4.jpeg'

import af1 from './af1.jpeg'
import af2 from './af2.jpeg'
import af3 from './af3.jpeg'
import af4 from './af4.jpeg'



export default function Buy() {
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
            <img src={buy} className="d-block w-100 " style={{ height: "400px", objectFit: "cover" }} alt="..." />
            <div className="position-absolute top-50 start-50 translate-middle text-black fw-bold fs-3">
              <h1>The #1 site real estate <br />professionals trust</h1>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className=''>
        <br />
        <h2 className='ms-5 fw-bold'>Homes around $347,950</h2>
        <br />
        <div className="card-group">
          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={buy1} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
              <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$324,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,698</span>  sqrt</p>
                <p className='mb-0'>327 Silicon Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={buy2} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$419,900</h3>
                <p><span className='fw-bold'>4</span>  bed    <span className='fw-bold ms-3'>2.5</span>  bath  <span className='fw-bold ms-3'>2,345</span>  sqrt</p>
                <p className='mb-0'>200 Veracrux Ct</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={buy3} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$352,900</h3>
                <p><span className='fw-bold'>5</span>  bed    <span className='fw-bold ms-3'>3</span>  bath  <span className='fw-bold ms-3'>2,511</span>  sqrt</p>
                <p className='mb-0'>335 Silicon Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={buy4} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$332,900</h3>
                <p><span className='fw-bold'>4</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,764</span>  sqrt</p>
                <p className='mb-0'>333 Silicon Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>

<br />
<br />

      <div className=''>
        <br />
        <h2 className='ms-5 fw-bold'>Newest Listings</h2>
        <br />
        <div className="card-group">
          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={nl1} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
              <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">Contract for price</h3>
                <p><span className='fw-bold'>2</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,809</span>  sqrt</p>
                <p className='mb-0'>undifined Plan</p>
                <p className='mb-0'>Greenville, SC  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={nl2} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$324,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,618</span>  sqrt</p>
                <p className='mb-0'>327 Silicon Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={nl3} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$463,900</h3>
                <p><span className='fw-bold'>5</span>  bed    <span className='fw-bold ms-3'>3</span>  bath  <span className='fw-bold ms-3'>2,742</span>  sqrt</p>
                <p className='mb-0'>107 Veracruz Ct</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={nl4} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">Contact for price</h3>
                <p><span className='fw-bold'>2</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,872</span>  sqrt</p>
                <p className='mb-0'>undifined Plan</p>
                <p className='mb-0'>Greenville, SC <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <br />
      <br />

      <div className=''>
        <br />
        <h2 className='ms-5 fw-bold'>Upcoming Open Houses</h2>
        <br />
        <div className="card-group">
          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={up1} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
              <div>
                <h6>Townhome</h6>
                <h3 className="card-text fw-bold">$399,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2.5</span>  bath  <span className='fw-bold ms-3'>1,991</span>  sqrt</p>
                <p className='mb-0'>11 Stinson Rd</p>
                <p className='mb-0'>Greenville, SC 29607 <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={up2} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$379,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2.5</span>  bath  <span className='fw-bold ms-3'>1,590</span>  sqrt</p>
                <p className='mb-0'>39 Woodlawn Ave</p>
                <p className='mb-0'>Greenville, SC 29611  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={up3} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$562,500</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>3</span>  bath  <span className='fw-bold ms-3'>1,759</span>  sqrt</p>
                <p className='mb-0'>337 Potomac Ave</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={up4} className="card-img-top rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family House</h6>
                <h3 className="card-text fw-bold">$517,499</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,600</span>  sqrt</p>
                <p className='mb-0'>271 Beacon St</p>
                <p className='mb-0'>Greenville, SC 29605<button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <br />
      <br />

      <div className=''>
        <br />
        <h2 className='ms-5 fw-bold'>Affordable Homes</h2>
        <br />
        <div className="card-group">
          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={af1} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
              <div>
                <h6>Listing for Sale</h6>
                <h3 className="card-text fw-bold">$252,990</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,418</span>  sqrt</p>
                <p className='mb-0'>436, Silicon Dr Stinson Rd</p>
                <p className='mb-0'>Greenville, SC 29605 <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={af2} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Listing for Sale</h6>
                <h3 className="card-text fw-bold">$255,990</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,418</span>  sqrt</p>
                <p className='mb-0'>434 Silicone Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={af3} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Listing for Sale</h6>
                <h3 className="card-text fw-bold">$264,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,429</span>  sqrt</p>
                <p className='mb-0'>310 Mill Fork Trail Trl</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={af4} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Listing for Sale</h6>
                <h3 className="card-text fw-bold">$249,900</h3>
                <p><span className='fw-bold'>3</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>1,429</span>  sqrt</p>
                <p className='mb-0'>312 Mill Fork Trail Trl</p>
                <p className='mb-0'>Greenville, SC 29605<button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className=''>
        <br />
        <h2 className='ms-5 fw-bold'>Luxury Homes</h2>
        <br />
        <div className="card-group">
          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={lux1} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
              <div>
                <h6>Condo</h6>
                <h3 className="card-text fw-bold">$1,134,900</h3>
                <p><span className='fw-bold'>4</span>  bed    <span className='fw-bold ms-3'>4</span>  bath  <span className='fw-bold ms-3'>3,922</span>  sqrt</p>
                <p className='mb-0'>10 Medlock Dr</p>
                <p className='mb-0'>Greenville, SC 29615 <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={lux2} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family Home</h6>
                <h3 className="card-text fw-bold">$1,600,000</h3>
                <p><span className='fw-bold'>5</span>  bed    <span className='fw-bold ms-3'>5</span>  bath  <span className='fw-bold ms-3'>3,277</span>  sqrt</p>
                <p className='mb-0'>202 Cammer Ave</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={lux3} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Single-Family Home</h6>
                <h3 className="card-text fw-bold">$1,180,000</h3>
                <p><span className='fw-bold'>4</span>  bed    <span className='fw-bold ms-3'>2</span>  bath  <span className='fw-bold ms-3'>2,527</span>  sqrt</p>
                <p className='mb-0'>22 N Brookwood Dr</p>
                <p className='mb-0'>Greenville, SC 29605  <button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>

          <div className="card rounded-4 bg-body-secondary  ms-2 me-2" style={{ width: "auto", height: "auto" }}>
            <img src={lux4} className="card-img-top  rounded-top-4 " alt="..." style={{ height: "170px", objectFit: "cover" }} />
            <div className="card-body d-flex">
            <div>
                <h6>Land</h6>
                <h3 className="card-text fw-bold">$1,200,000</h3>
                <p><span className='fw-bold'>0.61</span>   acre  lot</p>
                <p className='mb-0'>16 Brrokview Cir</p>
                <p className='mb-0'>Greenville, SC 29605<button className='ms-5 btn btn-outline-dark rounded-5 ' type="button">explore</button></p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}
