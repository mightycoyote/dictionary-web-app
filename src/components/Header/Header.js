import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg'
import FontSelect from '../FontSelect';
import DarkModeSelect from '../DarkModeSelect';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="Dictionary Search logo"/>
      </div>
      <div className={styles.selectors}>
        <FontSelect />
        <div className={styles.divider}></div>
        <DarkModeSelect />
      </div>
    </header>);
}

export default Header;
