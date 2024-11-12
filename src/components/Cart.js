// src/components/Cart.js
import React from 'react';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <span>${item.price}</span>
          <span>Qty: {item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => navigate('/checkout')}>Checkout</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
