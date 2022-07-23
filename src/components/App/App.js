import React from 'react';
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker';
import UserContext from '../User/User';
import './App.css';

const user = {
  name: "Homero",
  email: "homerosimp@gmail.com"
}

function App() {
  return (
    <React.StrictMode>
    <UserContext.Provider value={user}>
      <Header />
      <TripMaker/>
    </UserContext.Provider>
  </React.StrictMode> 
  );
}

export default App;
