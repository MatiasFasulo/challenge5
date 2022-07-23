import React, { useContext } from 'react'
import { TripContext } from '../TripMaker/TripMaker';
import styles from './tripSummary.module.css'

const TripSummary = () => {
  const { trips } = useContext(TripContext);
  return (
    <div className={styles.wrapper}>
      <h2>Tu pedido: </h2>
      <ul className={styles.list}>
        {trips.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TripSummary