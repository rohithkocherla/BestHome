import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Login from './Login'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import log from './log.png'
export default function Signup() {
  const [name, SetName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result)
    navigate('/login')
      })
      .catch(err => console.log(err))
  }
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
    
      
<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="d-flex border border-light-subtle rounded-5 bg-body-secondary p-5 gap-4" style={{ width: "800px" }}>
    
    
    <div className="w-50 d-flex flex-column align-items-center">
      <h1 className="text-center text-danger">Signup</h1>
      <br />
      <form action="" onSubmit={handleSubmit} className="w-100">
        <input type="text" name="name" autoComplete="off" placeholder="Name" className="form-control rounded-3" onChange={(e) => SetName(e.target.value)} />
        <br />
        <input type="email" name="email" autoComplete="off" placeholder="Email" className="form-control rounded-3" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" name="password" autoComplete="off" placeholder="Password" className="form-control rounded-3" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" className="btn btn-primary w-100 rounded-3">Signup</button>
      </form>
      <br />
      <p>Already have an Account?</p>
      <Link to="/login" className="btn btn-default border w-100 bg-light">Login</Link>
    </div>

    
    <div className="w-50 d-flex align-items-center justify-content-center h-100">
      <img src={log} alt="Signup" className="img-fluid rounded-3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    
  </div>
</div>


    </>
  )
}
