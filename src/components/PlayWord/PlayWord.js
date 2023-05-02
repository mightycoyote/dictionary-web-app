import React from "react";
import styles from "./PlayWord.module.css";
// import playIcon from "../../assets/images/icon-play.svg";

function PlayWord({ wordInfo }) {
  // URL or null
  const [audioFile, setAudioFile] = React.useState(null);
  const audioRef = React.useRef();

  // find a phonetics entry that includes audio
  React.useEffect(() => {
    const audioSifted = wordInfo.phonetics.find((audio) => audio.audio !== "");
    setAudioFile(audioSifted !== null ? audioSifted?.audio : null);
  }, [wordInfo.phonetics]);

  return (
    <>
      {audioFile && (
        <>
          <audio src={audioFile} ref={audioRef} />
          <button
            className={styles.button}
            onClick={() => audioRef.current.play()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              role="img"
              aria-labelledby="title"
            >
              <title id="title">Play pronuncation (when available)</title>
              <g className={styles.svg} fill="#A445ED" fillRule="evenodd">
                <circle
                  className={styles.circle}
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  opacity=".25"
                />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
        </>
      )}
    </>
  );
}

export default PlayWord;
