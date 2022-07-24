import React from 'react'
import { CartProvider } from '../../Context/CartContext';
import TripButton from '../TripButton/TripButton';
import styles from './tripItem.module.css'

const TripItem = ({ name, image, config, description }) => {

  return (
    <CartProvider>
      <div className={styles.wrapper}>
        <h3>{name}</h3>
        <img className={styles.image} src={image} alt={name} />
        <p>{description}</p>
        <TripButton text={config} item={name} />
      </div>
    </CartProvider>
  )
}

export default TripItem