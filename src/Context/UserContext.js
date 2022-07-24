import React, { createContext } from 'react';

export const UserContext = createContext();

const userData = {
    name: "Homero",
    email: "homerosimp@gmail.com"
}

export const UserProvider = ({ children }) => {
    return(
        <UserContext.Provider value={userData}>
            { children }
        </UserContext.Provider>
    )
};