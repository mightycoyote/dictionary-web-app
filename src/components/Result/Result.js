import React from 'react';
import styles from './Result.module.css';
import PlayWord from '../PlayWord/PlayWord';
import newwindow from '../../assets/images/icon-new-window.svg'


function Result() {
  return (
    <>
      <div className={styles.wordheader}>
        <div>
          <h1>keyboard</h1>
          <p>pronunciation</p>
        </div>
        <div>
          <PlayWord />
        </div>
      </div>
      <div className={styles.partofspeechsection}>
        <h2>noun</h2>
          <div>
            <h3 className={styles.meaningh3}>Meaning</h3>
            <ul>
              <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
              <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
            </ul>
          </div>
          <div className={styles.synonymssection}>
            <h3 classname={styles.synonymsh3}>Synonyms</h3>
              {/* presumably meant to run a new search when clicked */}
            <div><a href="example.com">electronic keyboard</a></div>
          </div>
      </div>
      <div className={styles.source}>
        <h3>Source</h3>
        <div>
          <a href="example.com">https://en.wiktionary.org/wiki/keyboard</a>
          <img src={newwindow} alt=""/>
        </div>
      </div>
    </>
  );
}

export default Result;
