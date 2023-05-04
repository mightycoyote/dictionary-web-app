import React from "react";
import styles from "./DarkModeSelect.module.scss";
import { CFormSwitch } from "@coreui/react";

function DarkModeSelect({ darkmodeOn, setDarkmodeOn }) {
  return (
    <form 
      onClick={() => setDarkmodeOn(!darkmodeOn)}
      className={styles.darkmodeform}
    >
      <CFormSwitch
        // label="Toggle Darkmode"
        id="formSwitchCheckDefault"
        checked={darkmodeOn}
        onChange={(event) => {
          setDarkmodeOn(event.target.checked);
        }}
        className={styles.switch}
      />
      <div>
        <svg
        // put in accessibility stuff
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className={styles.svg}
        >
          <path
            className={styles.svg}
            fill="none"
            stroke="#838383"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </form>
  );
}

export default DarkModeSelect;
