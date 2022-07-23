import React from 'react'
import TripButton from '../TripButton/TripButton';
import styles from './tripItem.module.css'

const TripItem = ({ image, name, config }) => {
  const CANCEL = "Cancelar";
  return (
    <div className={styles.wrapper}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {config !== "Promo" &&
        <TripButton text={CANCEL} />
      }
      <TripButton text={config} />
    </div>
  )
}

export default TripItem