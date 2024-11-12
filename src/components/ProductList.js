// src/components/ProductList.js
import React from 'react';
import useCart from '../hooks/useCart';

const ProductList = () => {
  const { addItemToCart } = useCart();
  const { addToCart } = useCart();

  // Sample product data
  const products = [
    { id: 1, name: 'Laplus Darkness', price: 1550, image: '/images/LaplusDarkness.jpg' },
    { id: 2, name: 'Mori Calliope', price: 150, image: '/images/MoriCalliope.jpg' },
    { id: 3, name: 'Murasaki Shion', price: 300, image: '/images/MurasakiShion.jpg' },
    { id: 4, name: 'Ninomae Inanis', price: 20, image: '/images/NinomaeInanis.jpg' },
    { id: 5, name: 'Shirakami Fubuki', price: 200, image: '/images/ShirakamiFubuki.jpg' },
    { id: 6, name: 'Shirogane Noel', price: 1000, image: '/images/ShiroganeNoel.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;