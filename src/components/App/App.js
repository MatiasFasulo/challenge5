import React from 'react';
import { UserProvider } from '../../Context/UserContext';
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <TripMaker/>
      </div>
    </UserProvider> 
  );
}

export default App;
