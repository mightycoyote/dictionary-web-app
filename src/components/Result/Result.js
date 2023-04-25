import React from 'react';
import styles from './Result.module.css';
import PlayWord from '../PlayWord/PlayWord';
import newwindow from '../../assets/images/icon-new-window.svg'
import EntrySection from '../EntrySection/EntrySection';


function Result({result, handleSubmit}) {

  // so really display needs to be for each meaning (there can be multiple) in each array item (there can be multiple)
  // but, it only needs to read the word, phonetics, and audio once

  // sometimes additional top-level entries contain new stuff, sometimes it repeats arrays nested in previous ones

  // may have to search through phonetics array in wordInfo to find the first one that has audio for PlayWord
  const wordInfo = result[0];
  const allEntries = result.map(entry => entry.meanings);

  return (
    <>
      <div className={styles.wordheader}>
        <div>
          <h1>{wordInfo.word}</h1>
          <p>{wordInfo.phonetic}</p>
        </div>
        <div>
          <PlayWord />
        </div>
      </div>

     {allEntries.map((entry) => (
      <EntrySection entry={entry} handleSubmit={handleSubmit} key={crypto.randomUUID()}/>
     ))}
     
      <div className={styles.source}>
        <h3>Source</h3>
        <div>
          <a href={wordInfo.sourceUrls} target="_blank" rel="noreferrer">{wordInfo.sourceUrls}</a>
          <img src={newwindow} alt="(opens in a new tab)"/>
        </div>
      </div>
    </>
  );
}

export default Result;
