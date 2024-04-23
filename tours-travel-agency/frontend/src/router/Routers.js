import React from 'react'
import {Navigate,Routes, Route } from 'react-router-dom'

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Hotel from "./../pages/Hotel";
import Flight  from '../pages/Flight';
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from '../pages/ThankYou';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/flight' element={<Flight/>}/>
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Router;