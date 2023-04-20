import React from 'react';
import styles from './FontSelect.module.css';

function FontSelect() {
  const [font, setFont] = React.useState('sanserif');

  return (
    <div className={styles.select}>
      <form>
        <label htmlFor="fontselect" className="visuallyhidden">Font Select</label>
        <select
          id="fontselect"
          value={font}
          onChange={event => {
            setFont(event.target.value)
          }}
        >
          <option value="sanserif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>
      </form>
    </div>
  );
}

export default FontSelect;
