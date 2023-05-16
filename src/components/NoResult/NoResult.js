import React from 'react';

function NoResult({result}) {
  return (
    <React.Fragment className="noresult">
      <p className="emoji" role="img" aria-label="confused face">😕</p>
      <h1>{result.title}</h1>
      <p>{result.message} {result.resolution}</p>
    </React.Fragment>
  );
}

export default NoResult;
