// components/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12; // 12% tax
  const total = subtotal + tax;

  const handlePayment = () => {
    clearCart();
    alert("Payment successful!");
    navigate('/');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <div>Tax (12%): ${tax.toFixed(2)}</div>
      <div>Total: ${total.toFixed(2)}</div>
      <button onClick={() => navigate(-1)}>Cancel</button>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Checkout;
