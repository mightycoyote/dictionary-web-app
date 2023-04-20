import React from 'react';
import styles from './DarkModeSelect.module.css';
import moon from '../../assets/images/icon-moon.svg';
import { CFormSwitch } from '@coreui/react';

function DarkModeSelect() {
  // const [darkmodeSelected, setDarkmodeSelected] = React.useState('false');

  return (
    <div className={styles.toggle}>
      <form>
        <CFormSwitch label={<Moon />} id="formSwitchCheckDefaultNormal"/>
      </form>
    </div>
  );
}

function Moon() {
  return (
     <img src={moon} alt="Toggle Darkmode" />
  );
}

export default DarkModeSelect;
