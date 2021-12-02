import React, { createContext, useState } from "react";

export const CartContext = createContext()

//Custom Provider

export const CartProvider = ( {children} ) =>{

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart ( [...cart, item ])
    }

    const removeFromCart = (id) => {
        setCart ( cart.filter(prod => prod.id !== id ) ) 
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalCant = () => {
        return cart.reduce((acc, prod) => acc + prod.counter, 0 )
    }

    const totalCompra = () =>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }

    const isInCart = (id) =>{
        return cart.some( prod => prod.id === id )
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            totalCant,
            isInCart,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}