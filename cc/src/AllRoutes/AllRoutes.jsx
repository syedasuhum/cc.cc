import React from "react";
import Home_carousel from "../components/Home_carousel.jsx"
import Accessory from "../components/Accessory.jsx";
import AccessoryDetails from "../components/AccessoryDetails.jsx";
import Login from "../components/Login.jsx";
import { Route, Routes ,BrowserRouter as Router } from "react-router-dom";
import LoginEmail from "../components/LoginEmail.jsx";
import Profile from "../components/Profile.jsx";
import { useState, useEffect } from 'react';
import Cart from "../components/Cart/Cart.jsx";
import { DataService } from '../components/Data/Data';
import ProductPage from "../Pages/productPage.jsx";
import Home from "../components/Home_carousel.jsx";
import HomePage from "../components/Home/HomePage.jsx";


const AllRoutes = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await DataService.getAll()
      setData(data)
    }
    fetchData()
  }, [])
  
console.log('datadata',data)
    return ( 
        <>
          <Router>
            <Routes>
      
              <Route index element={<Home_carousel/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/emaillogin" element={<LoginEmail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/cart' element={<Cart data={data} />} />
              <Route path="/:id/:id" element={<ProductPage data={data}/>}/>
              <Route path="/home" element={<HomePage data={data}/>} />
            </Routes>
            {/* <Login/> */}
          </Router>
        </>
    );
}

export default AllRoutes;




