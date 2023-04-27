import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
// import NoResult from './components/NoResult';
import Result from "./components/Result";
import placeholderData from "./placeholderData";

function App() {
  const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [result, setResult] = React.useState(placeholderData);
  // change to look for local prefs
  const [font, setFont] = React.useState('serif');
  // also system prefs for this one
  const [darkmodeOn, setDarkmodeOn] = React.useState(false);
  const [classes, setClasses] = React.useState(`app ${font}`);

  async function handleSubmit(search) {
    const response = await fetch(`${ENDPOINT}${search}`);
    const json = await response.json();
    setResult(json);
  }

  React.useEffect(() => {
    const darkmode = darkmodeOn ? "darkmode" : "";
    setClasses(`app ${font} ${darkmode}` );
  }, [font, darkmodeOn]);

  return (
    <div className={classes}>
      <div className="wrapper">
        <Header font={font} setFont={setFont} darkmodeOn={darkmodeOn} setDarkmodeOn={setDarkmodeOn} />
        <Search handleSubmit={handleSubmit} />
        {/* <NoResult /> */}
        {result && <Result result={result} handleSubmit={handleSubmit} />}
      </div>
    </div>
  );
}

export default App;
