import React from "react";

function EntrySection({ entry, handleSubmit }) {
  return (
    <>
      {entry.map((part) => (
        <div className="entrysection" key={crypto.randomUUID()}>
          <h2><span>{part.partOfSpeech}</span></h2>
          <div>
            <h3 className="meaningh3">Meaning</h3>
            {/* if there is an example used in a sentence, it's grouped at the level of each individual definition (bullet), goes with the individual definition */}
            <ul>
              {part.definitions?.map((definition) => (
                <>
                  <li key={crypto.randomUUID()}>{definition.definition}</li>
                  {definition.example && (
                    <li key={crypto.randomUUID()} className="example">
                      "{definition.example}"
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>

          {part.synonyms.length > 0 && (
            <div className="synonymssection">
              <h3>Synonyms</h3>
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
            <div className="synonymssection">
              <h3 className="synonymsh3">Antonyms</h3>
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
