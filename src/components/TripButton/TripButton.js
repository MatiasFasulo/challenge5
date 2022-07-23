import React, { useContext } from 'react'
import { TripContext } from '../TripMaker/TripMaker';
import styles from './tripButton.module.css'

const TripButton = ({ text }) => {
  const { setTrip } = useContext(TripContext);
  return (
    <button className={styles.add} onClick={() => setTrip(text)}>
      {text}
    </button>
  )
}

export default TripButton