import React from 'react';
import { CForm, CFormLabel, CFormInput, CFormText } from '@coreui/react';
import styles from './Search.module.css';

function Search() {
  return (
    <CForm>
      <CFormLabel htmlFor="search-box" className="visually-hidden">Search the dictionary</CFormLabel>
      <CFormInput
        id="search box"
        placeholder="Search for any word..."
        className={styles.input}
        aria-describedby="feedback-text"
        required
      />
      <CFormText hidden component="span" id="feedback-text" className={styles.emptyerror}>
        Whoops, can't be empty...
      </CFormText>

    </CForm>
    // <div>
    //   <form className={styles.search}>
    //     <label htmlFor="search-box" className="visually-hidden">Search the dictionary</label>
    //     <input id="search-box" />
    //   </form>
    // </div>
  );
}

export default Search;
