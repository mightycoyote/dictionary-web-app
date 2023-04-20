import React from 'react';
import styles from './DarkModeSelect.module.css';
import moon from '../../assets/images/icon-moon.svg';

function DarkModeSelect() {
  const [darkmodeSelected, setDarkmodeSelected] = React.useState('false');

  return (
    <div className={styles.toggle}>
      <form>
        <label htmlFor="darkmodetoggle" className="visuallyhidden">Darkmode Toggle</label>
        <input 
          type="checkbox"
          id="darkmodetoggle"
          checked={darkmodeSelected}
        />
      </form>
      <div>
        <img src={moon} alt="Toggle Darkmode" />
      </div>
    </div>
  );
}

export default DarkModeSelect;
