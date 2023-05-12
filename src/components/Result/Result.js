import React from "react";
import PlayWord from "../PlayWord/PlayWord";
import EntrySection from "../EntrySection/EntrySection";

function Result({ result, handleSubmit }) {
  // so really display needs to be for each meaning (there can be multiple) in each array item (there can be multiple)
  // but, it only needs to read the word, phonetics, and audio once
  const wordInfo = result[0];

  const allEntries = result.map((entry) => entry.meanings);
  // const allEntries2 = ;

  // console.log(result);
  // console.log(allEntries);
  // console.log(allEntries2);

  return (
    <>
      <div className="wordheader">
        <div>
          <h1>{wordInfo.word}</h1>
          <p>{wordInfo.phonetic}</p>
        </div>
        <div>
          <PlayWord wordInfo={wordInfo} />
        </div>
      </div>

      {allEntries.map((entry) => (
        <EntrySection
          entry={entry}
          handleSubmit={handleSubmit}
          key={crypto.randomUUID()}
        />
      ))}

      <div className="source">
        <h3>Source</h3>
        <div className="linkdiv">
          <a href={wordInfo.sourceUrls} target="_blank" rel="noreferrer">
            {wordInfo.sourceUrls}
          </a>
          <svg
            title="(opens in a new window)"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Result;
