'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        // If quantity is more than 1, reduce it by 1
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        // If quantity is 1, remove the product entirely
        return null;
      }
      return product;
    }).filter((product) => product !== null); // Filter out null (products with zero quantity)

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cart.map((product) => (
            <li key={product.id}>
              <span>{product.name} - ${product.price} x {product.quantity}</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      {cart.length > 0 && <button onClick={handleCheckout}>Proceed to Checkout</button>}
    </div>
  );
};

