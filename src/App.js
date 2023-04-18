import Header from './components/Header';
import Search from './components/Search';
// import NoResult from './components/NoResult';
import Result from './components/Result';

function App() {
  return (
    <div>
      <Header />
      <Search />
      {/* <NoResult /> */}
      <Result />
    </div>
  );
}

export default App;
