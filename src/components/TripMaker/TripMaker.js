import React from 'react'
import { CartProvider } from '../../Context/CartContext';
import { DataProvider } from '../../Context/DataContext';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';

const TripMaker = () => {

  return (
    <DataProvider>
      <CartProvider>
        <TripBuilder />
        <TripSummary />
      </CartProvider>
    </DataProvider>
  )
}

export default TripMaker