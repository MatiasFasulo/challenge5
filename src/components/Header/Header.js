import React, { useContext } from 'react'
import UserContext from '../User/User';
import styles from './header.module.css'

const Header = () => {
    const user = useContext(UserContext);
    return <div className={styles.wrapper}>Bienvenido {user.name}</div>
}

export default Header