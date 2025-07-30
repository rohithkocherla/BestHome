import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Rent from './Rent'
import Sell from './Sell'
import Buy from './Buy'
import About from './About'
export default function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/rent' element={<Rent/>}></Route>
      <Route path='/sell' element={<Sell/>}></Route>
      <Route path='/buy' element={<Buy/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}
