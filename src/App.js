import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
// import NoResult from './components/NoResult';
import Result from './components/Result';

function App() {
  // set darkmode by adding and removing class dark, fonts maybe the same way 
  // const [classes, setClasses] = React.useState('app');

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Search />
        {/* <NoResult /> */}
        <Result />
      </div>
    </div>
  );
}

export default App;
