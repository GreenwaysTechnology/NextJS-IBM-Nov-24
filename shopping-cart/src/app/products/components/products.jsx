'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const products = [
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 40 },
    { id: 3, name: 'Product 3', price: 50 },
];

export const Products = () => {
    const [cart, setCart] = useState([]);
    const router = useRouter();


    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product already exists in the cart
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                // If the product is in the cart, increment the quantity by 1
                const updatedCart = prevCart.map((item, index) => {
                    if (index === existingProductIndex) {
                        // Only increment the quantity of the matching item
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item; // Return unchanged items
                });

                // Save the updated cart to localStorage and return the updated state
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                // If the product is not in the cart, add it with quantity 1
                const updatedCart = [...prevCart, { ...product, quantity: 1 }];
                localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
                return updatedCart;
            }
        });
    };
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const goToCart = () => {
        router.push('/cart'); // Navigate to the cart page
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
    };
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


    return (
        <>
            <div>
                <h1>Shopping Cart - Products</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name} - INR {product.price}</span>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
                <button onClick={goToCart}>Go to Cart</button>
            </div>
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
        </>
    );
};

