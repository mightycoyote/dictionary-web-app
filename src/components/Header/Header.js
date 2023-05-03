import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg'
import FontSelect from '../FontSelect';
import DarkModeSelect from '../DarkModeSelect';

function Header({font, setFont, darkmodeOn, setDarkmodeOn}) {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="Dictionary Search logo"/>
      </div>
      <div className={styles.selectors}>
        <FontSelect font={font} setFont={setFont} />
        <div className={styles.divider}></div>
        <DarkModeSelect darkmodeOn={darkmodeOn} setDarkmodeOn={setDarkmodeOn} />
      </div>
    </header>);
}

export default Header;
