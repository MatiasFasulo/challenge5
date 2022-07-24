import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../../Context/CartContext';
import styles from './tripButton.module.css'

const TripButton = ({ text, item }) => {
  const { cart, setCart} = useContext(CartContext);

  const handleAddToCart = () => {
    // let newCart = [...cart];
    setCart(item);
    console.log(cart);
  }

  // const handleRemoveFromCart = () => console.log(item);

  return (
    <CartProvider>
      <button 
        className={styles.button} 
        onClick={handleAddToCart}
      >{text}</button>
    </CartProvider>
  )
}

export default TripButton