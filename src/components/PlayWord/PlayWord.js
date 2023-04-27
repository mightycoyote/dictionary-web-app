import React from "react";
import styles from "./PlayWord.module.css";
import playIcon from "../../assets/images/icon-play.svg";

function PlayWord({ wordInfo }) {
  // URL or null
  const [audioFile, setAudioFile] = React.useState("");
  const audioRef = React.useRef();

  React.useEffect(() => {
    const audioSifted = wordInfo.phonetics.find((audio) => audio.audio !== "");
    setAudioFile(audioSifted !== null ? audioSifted.audio : "");
  }, [wordInfo.phonetics]);

  return (
    <>
      <audio src={audioFile} ref={audioRef} />
      <input
        className={styles.button}
        type="image"
        src={playIcon}
        alt="Play pronuncation (if available)"
        onClick={() => audioRef.current.play()}
      />
    </>
  );
}

export default PlayWord;
