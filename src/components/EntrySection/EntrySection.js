import React from "react";
import styles from "./EntrySection.module.css";

function EntrySection({ entry, handleSubmit }) {
  return (
    <>
      {entry.map((part) => (
        <div className={styles.entrysection} key={crypto.randomUUID()}>
          <h2>{part.partOfSpeech}</h2>
          <div>
            <h3 className={styles.meaningh3}>Meaning</h3>
            {/* if there is an example used in a sentence, it's grouped at the level of each individual definition (bullet), goes with the individual definition */}
            <ul>
              {part.definitions?.map((definition) => (
                <>
                  <li key={crypto.randomUUID()}>{definition.definition}</li>
                  {definition.example && (
                    <li key={crypto.randomUUID()} className={styles.example}>
                      "{definition.example}"
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>

          {part.synonyms.length > 0 && (
            <div className={styles.synonymssection}>
              <h3 className={styles.synonymsh3}>Synonyms</h3>
              <div>
                {part.synonyms?.map((synonym) => (
                  <span
                    key={crypto.randomUUID()}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSubmit(synonym);
                    }}
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          )}

          {part.antonyms.length > 0 && (
            <div className={styles.synonymssection}>
              <h3 className={styles.synonymsh3}>Antonyms</h3>
              <div>
                {part.antonyms?.map((antonym) => (
                  <span
                    key={crypto.randomUUID()}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSubmit(antonym);
                    }}
                  >
                    {antonym}
                  </span>
                ))}
              </div>
            </div>
          )}  

        </div>
      ))}
    </>
  );
}

export default EntrySection;
