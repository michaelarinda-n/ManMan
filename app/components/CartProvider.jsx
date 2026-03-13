"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Muat keranjang dari Local Storage saat pertama kali buka web
    useEffect(() => {
        const savedCart = localStorage.getItem('amanahCart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Gagal memuat keranjang");
            }
        }
        setIsLoaded(true);
    }, []);

    // Simpan keranjang ke Local Storage tiap ada perubahan
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('amanahCart', JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item => 
                    item.id === product.id 
                    ? { ...item, qty: item.qty + 1 } 
                    : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQty) => {
        if (newQty < 1) return;
        setCart(prevCart => prevCart.map(item => 
            item.id === id ? { ...item, qty: newQty } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('amanahCart');
    };

    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart,
            cartCount,
            cartTotal,
            isLoaded
        }}>
            {children}
        </CartContext.Provider>
    );
};
