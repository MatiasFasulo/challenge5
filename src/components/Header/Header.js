import React, { useContext } from 'react'
import { UserContext, UserProvider } from '../../Context/UserContext';
import styles from './header.module.css'

const Header = () => {
    const userData= useContext(UserContext);
    return (
        <UserProvider>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <img className={styles.logoImg} src="images/logo.svg" alt="logo" />
                    <h4>TripBNB</h4>
                </div>
                <div className={styles.userContainer}>
                    <h2>Bienvenido {userData.name}</h2>
                </div>
            </div>
        </UserProvider>
    );
}

export default Header