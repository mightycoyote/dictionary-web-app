import React from 'react';
import styles from './NoResult.module.scss';

function NoResult({result}) {
  return (
    <div className={styles.noresult}>
      <p className={styles.emoji} role="img" aria-label="confused face">😕</p>
      <h1>{result.title}</h1>
      <p>{result.message} {result.resolution}</p>
    </div>
  );
}

export default NoResult;
