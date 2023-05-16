import React from 'react';

function NoResult({result}) {
  return (
    <main className="noresult">
      <p className="emoji" role="img" aria-label="confused face">😕</p>
      <h1>{result.title}</h1>
      <p>{result.message} {result.resolution}</p>
    </main>
  );
}

export default NoResult;
