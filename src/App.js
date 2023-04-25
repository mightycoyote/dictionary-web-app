import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
// import NoResult from './components/NoResult';
import Result from './components/Result';

function App() {
  const ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const [result, setResult] = React.useState(null);

  async function handleSubmit(search) {

    const response = await fetch(`${ENDPOINT}${search}`);
    const json = await response.json();
    setResult(json);
  }

  // set darkmode by adding and removing class dark, fonts maybe the same way 
  // const [classes, setClasses] = React.useState('app');

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Search
          handleSubmit={handleSubmit}
        />
        {/* <NoResult /> */}
        {result && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;
