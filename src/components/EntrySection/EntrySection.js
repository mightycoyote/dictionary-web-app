import React from "react";

function EntrySection({ entry, handleSubmit }) {
  return (
    <React.Fragment>
      {entry.map((part) => (
        <div className="entrysection" key={crypto.randomUUID()}>
          <h2><span>{part.partOfSpeech}</span></h2>
          <div>
            <h3 className="meaningh3">Meaning</h3>
            <ul>
              {part.definitions?.map((definition) => (
                <React.Fragment key={crypto.randomUUID()}>
                  <li>{definition.definition}</li>
                  {definition.example && (
                    <li className="example">
                      "{definition.example}"
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {part.synonyms.length > 0 && (
            <div className="synonymssection" >
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
    </React.Fragment>
  );
}

export default EntrySection;
