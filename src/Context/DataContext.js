import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const initialTrips = [
    {
      image: "img03.jpg", 
      name: "Punta Cana",
      description: "Punta Cana, el extremo más oriental de República Dominicana, limita con el mar Caribe y con el océano Atlántico. Es una región conocida por sus 32 km de extensión de playas y aguas claras. ",
      config: "Promo"
    },
    {
      image: "img02.jpg", 
      name: "Madrid",
      description: "Madrid es un municipio y una ciudad de España. La localidad, con categoría histórica de villa, ​ es la capital del Estado​ y de la Comunidad de Madrid.",
      config: "Reservar"
    },
    {
      image: "img01.jpg", 
      name: "Los Angeles",
      description: "Los Ángeles es una ciudad en rápido crecimiento del Sur de California y es el núcleo de la industria televisiva y cinematográfica del país. Cerca de su icónico letrero de Hollywood.",
      config: "Compra"
    }
  ];

export const DataProvider = ( { children }) => {
    const [ trips, setTrips ] = useState(initialTrips);

  return (
    <DataContext.Provider value={{trips, setTrips}}>
        { children }
    </DataContext.Provider>
  )
}