// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Components/signup';
import Login from './Components/login';
import ProductList from './Components/productList';
import Navbar from './Components/navbar';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Home from './Components/Home';


function App() {
  

  return (
    <Router>
      
      <Navbar />
      {/* <Home /> */}
      
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
