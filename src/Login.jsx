import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from './Home'


import log from './log.png'


export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email,password})
      .then(result =>{
        console.log(result)
        if(result.data === "Success"){
          navigate('/home')
        }
      })
      .catch(err=> console.log(err))
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
    
          <br />
          <br />


{/* <div className='border border-light-subtle rounded-5 bg-info-subtle m-5 p-5 d-flex flex-column align-items-center' style={{ width: "500px", height: "500px" }}>
  <h1 className='text-center text-danger'>Login Form</h1>
  <br />
  <form className="w-100" onSubmit={handleSubmit}>
    <input type="email" name="email" autoComplete='off' placeholder='Email' className='form-control rounded-3 mb-3' onChange={(e) => setEmail(e.target.value)} />
    <br />
    <input type="password" name='password' autoComplete='off' placeholder='Password' className='form-control rounded-3 mb-3' onChange={(e) => setPassword(e.target.value)} />
    <br />
        <br />
    <button type="submit" className="btn btn-primary w-50 rounded-3">Login</button>
  </form>
  <br />
        <br />
  <p className="mt-3">Don't have an account?</p>
  <Link to="/register" className="btn btn-default border w-100 bg-light">Signup</Link>
</div> */}



<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="d-flex border border-light-subtle rounded-5 bg-body-secondary p-5" style={{ width: "800px" }}>
    

    <div className="w-50 d-flex flex-column align-items-center">
      <h1 className="text-center text-danger">Login Form</h1>
      <br />
      <form className="w-100" onSubmit={handleSubmit}>
        <input type="email" name="email" autoComplete="off" placeholder="Email" className="form-control rounded-3 mb-3" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" name="password" autoComplete="off" placeholder="Password" className="form-control rounded-3 mb-3" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" className="btn btn-primary w-100 rounded-3">Login</button>
      </form>
      <br />
      <p className="mt-3">Don't have an account?</p>
      <Link to="/register" className="btn btn-default border w-100 bg-light">Signup</Link>
    </div>
    

    <div className="w-50 d-flex align-items-center justify-content-center ms-5 bg-transparent">
      <img src={log} alt="Login" className="img-fluid rounded-3 bg-transparent" style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </div>
  </div>
</div>


    </>
  )
}
