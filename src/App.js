import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
// import NoResult from './components/NoResult';
import Result from './components/Result';

function App() {
  const [classes, setClasses] = React.useState('app sanserif');

  return (
    <div className={classes}>
      <Header />
      <Search />
      {/* <NoResult /> */}
      <Result />
    </div>
  );
}

export default App;
