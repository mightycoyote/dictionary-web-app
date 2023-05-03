import React from "react";
// import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import NoResult from "./components/NoResult/NoResult";
// import placeholderData from "./placeholderData";

function App() {
  const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [status, setStatus] = React.useState("idle");
  const [result, setResult] = React.useState("");
  // looks for local prefs
  const [font, setFont] = React.useState(() => {
    const savedPref = localStorage.getItem("dictionaryFont");
    return savedPref ?? "sanserif";
  });
  // also system prefs for this one
  const [darkmodeOn, setDarkmodeOn] = React.useState(() => {
    const userPref =
      JSON.parse(localStorage.getItem("dictionaryDarkmode")) ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return userPref;
  });
  const [classes, setClasses] = React.useState(`app ${font}`);

  async function handleSubmit(search) {
    const response = await fetch(`${ENDPOINT}${search}`);
    const json = await response.json();
    if (json.title) {
      setStatus("error");
      setResult(json);
    } else {
      setStatus("success");
      setResult(json);
    }
  }

  React.useEffect(() => {
    const darkmode = darkmodeOn ? "darkmode" : "";
    setClasses(`app ${font} ${darkmode}`);
    // font is the actual font, darkmodeOn is a boolean
    localStorage.setItem("dictionaryFont", font);
    localStorage.setItem("dictionaryDarkmode", darkmodeOn);
  }, [font, darkmodeOn]);

  return (
    <div className={classes}>
      <div className="wrapper">
        <Header
          font={font}
          setFont={setFont}
          darkmodeOn={darkmodeOn}
          setDarkmodeOn={setDarkmodeOn}
        />
        <Search handleSubmit={handleSubmit} />
        {status === "error" && <NoResult result={result} />}
        {status === 'success' && <Result result={result} handleSubmit={handleSubmit} />}
      </div>
    </div>
  );
}

export default App;
