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
  // looks for local prefs
  const [font, setFont] = React.useState(() => {
    const savedPref = localStorage.getItem('dictionaryFont');
    return savedPref ?? 'sanserif';
  });
  // also system prefs for this one
  const [darkmodeOn, setDarkmodeOn] = React.useState(() => {
    const userPref = localStorage.getItem('dictionaryDarkmode') ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPref;
  });
  const [classes, setClasses] = React.useState(`app ${font}`);

  async function handleSubmit(search) {
    const response = await fetch(`${ENDPOINT}${search}`);
    const json = await response.json();
    setResult(json);
  }

  React.useEffect(() => {
    const darkmode = darkmodeOn ? "darkmode" : "";
    setClasses(`app ${font} ${darkmode}`);
    // font is the actual font, darkmodeOn is a boolean
    localStorage.setItem('dictionaryFont', font);
    localStorage.setItem('dictionaryDarkmode', darkmodeOn);
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
