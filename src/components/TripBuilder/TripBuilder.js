import React, { useContext } from 'react'
import { DataContext, DataProvider } from '../../Context/DataContext';
import TripItem from '../TripItem/TripItem';
import styles from './tripBuilder.module.css'

const TripBuilder = () => {
  const { trips } = useContext(DataContext);
  console.log(trips)

  return (
    <DataProvider>
      <div className={styles.wrapper}>
        {trips.map(trip => (
          <TripItem 
            key={trip.name} 
            image={__dirname + "images/" + trip.image} 
            name={trip.name} 
            config={trip.config} 
            description={trip.description} 
          /> 
        ))}
      </div>
    </DataProvider>
  )
}

export default TripBuilder