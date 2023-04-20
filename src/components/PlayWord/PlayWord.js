import React from 'react';
import styles from './PlayWord.module.css';
import playIcon from '../../assets/images/icon-play.svg';

function PlayWord() {
  return (
    <input className={styles.button}
      type="image"
      src={playIcon}
      alt="Play pronuncation"
    />
  );
}

export default PlayWord;
