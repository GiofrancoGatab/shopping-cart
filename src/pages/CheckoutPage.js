// src/pages/CheckoutPage.js
import React from 'react';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12; // 12% tax
  const total = subtotal + tax;

  const handlePayment = () => {
    alert("Payment Successful!");
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (12%): ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <div className="cart-buttons">
        <button className="clear-btn" onClick={() => navigate('/')}>Cancel</button>
        <button className="checkout-btn" onClick={handlePayment}>Pay</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
