import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();

const initialCartValue = [];

function reducer(state, item) {
  return [...state, item];
}

export const CartProvider = ({ children }) => {
  const [ cart, setCart] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      { children }
    </CartContext.Provider>
  )
}