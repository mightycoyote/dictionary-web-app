import React from 'react';
import { CForm, CFormLabel, CFormInput, CFormText } from '@coreui/react';
import styles from './Search.module.css';

function Search({ handleSubmit }) {
  const [search, setSearch] = React.useState('');

  return (
    <CForm onSubmit={(event) => {
      event.preventDefault();
      handleSubmit(search);
    }}>
      <CFormLabel htmlFor="search-box" className="visually-hidden">Search the dictionary</CFormLabel>
      <CFormInput
        id="search-box"
        placeholder="Search for any word..."
        className={styles.input}
        aria-describedby="feedback-text"
        required
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <CFormText hidden component="span" id="feedback-text" className={styles.emptyerror}>
        Whoops, can't be empty...
      </CFormText>

    </CForm>
  );
}

export default Search;
