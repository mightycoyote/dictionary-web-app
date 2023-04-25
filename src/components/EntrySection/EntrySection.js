import React from 'react';
import styles from './EntrySection.module.css';

function EntrySection({entry}) {
  console.log(entry);
  // console.log(entry.map(part => part.partOfSpeech));

  return (
    <div>
    {entry.map((part) => (
      <div className={styles.entrysection}>
      <h2>{part.partOfSpeech}</h2>
        <div>
          <h3 className={styles.meaningh3}>Meaning</h3>
          {/* if there is an example used in a sentence, it's grouped at the level of each individual definition (bullet), goes with the individual definition */}
          <ul>
            {part.definitions?.map((definition) => (
              <>
                <li>{definition.definition}</li>
                {definition.example && <li className={styles.example}>"{definition.example}"</li>}
              </>
            ))}
          </ul>
        </div>

        {part.synonyms > 0 && (
          <div className={styles.synonymssection}>
            <h3 className={styles.synonymsh3}>Synonyms</h3>
            {part.synonyms?.map((synonym) => (
              <a href="example.com">{synonym}</a>
            ))}
          </div>
        )}

      </div>
    
    ))}
    </div>
  );
}

export default EntrySection;

