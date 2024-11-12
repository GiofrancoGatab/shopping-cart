// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="home">
      <h1>Shopping Cart App</h1>
      <div className="content">
        <ProductList/>
        <Cart />
      </div>
    </div>
  );
};

export default Home;