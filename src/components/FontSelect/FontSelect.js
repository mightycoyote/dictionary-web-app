import React from 'react';
import { CFormSelect } from '@coreui/react';
import styles from './FontSelect.module.css';

function FontSelect() {
  // const [font, setFont] = React.useState('sanserif');

  return (
    <form>
      <label htmlFor="fontselect" className="visually-hidden">Font Select</label>
      <CFormSelect className={styles.select}>
      {/* <select
        id="fontselect"
        value={font}
        onChange={event => {
          setFont(event.target.value)
        }}
      > */}
        <option value="sanserif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
        </CFormSelect>
      {/* </select> */}
    </form>
  );
}

export default FontSelect;
