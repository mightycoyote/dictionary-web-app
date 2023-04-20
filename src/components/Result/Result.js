import React from 'react';
import styles from './Result.module.css';
import PlayWord from '../PlayWord/PlayWord';


function Result() {
  return (
    <div className={styles.wordheader}>
      <div>
        <h1>keyboard</h1>
        <p>pronunciation</p>
      </div>
      <div>
        <PlayWord />
      </div>
      
    </div>
  );
}

export default Result;
