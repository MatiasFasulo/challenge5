import React from 'react'
import TripItem from '../TripItem/TripItem';
import styles from './tripBuilder.module.css'

const trips = [
  {
    image: "img01.png", 
    name: "Punta Cana",
    config: "Promo"
  },
  {
    image: "img02.png", 
    name: "Madrid",
    config: "Reservar"
  },
  {
    image: "img03.png", 
    name: "Los Angeles",
    config: "Compra"
  }
];

const TripBuilder = () => {
  return (
    <div className={styles.wrapper}>
      {trips.map(trip => <TripItem key={trip.name} image={__dirname + "images/" + trip.image} name={trip.name} config={trip.config} /> )}
    </div>
  )
}

export default TripBuilder