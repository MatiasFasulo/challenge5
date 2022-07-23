import React, { createContext, useReducer } from 'react'
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';
import styles from './tripMaker.module.css'

export const TripContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

const TripMaker = () => {
  const [trips, setTrips] = useReducer(reducer, []);
  return (
    <TripContext.Provider value={{ trips, setTrips }}>
      <h1 className={styles.wrapper}>
        <span role="img" aria-label="icecream">🍦 </span>
          Helados Ice Cream
        <span role="img" aria-label="icecream"> 🍦</span>    
      </h1>
      <TripBuilder />
      <TripSummary />
    </TripContext.Provider>
  )
}

export default TripMaker