import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../../Context/CartContext';
import TripButton from '../TripButton/TripButton';
import styles from './tripSummary.module.css'
const CANCEL = "Cancelar";

const TripSummary = () => {
  const { cart } = useContext(CartContext);
  //const cart = [];
  console.log(cart);

  const handleCancel = () => {
    console.log("eliminar ultimo")
  }

  return (
    <CartProvider>
      <div className={styles.wrapper}>
        <h4>Carrito: </h4>
        <div className={styles.divider}></div>
        <ul className={styles.list}>
          {cart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.divider}></div>
        <TripButton text={CANCEL} action={handleCancel} />
      </div>
    </CartProvider>
  )
}

export default TripSummary