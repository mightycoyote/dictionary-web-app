import React from "react";
import styles from "./DarkModeSelect.module.css";
import moon from "../../assets/images/icon-moon.svg";
import { CFormSwitch } from "@coreui/react";

function DarkModeSelect({ darkmodeOn, setDarkmodeOn }) {
  
  return (
    <div className={styles.switch}>
      <form>
        <CFormSwitch
          label={<Moon />}
          id="formSwitchCheckDefault"
          checked={darkmodeOn}
          onChange={event => {
            setDarkmodeOn(event.target.checked);
          }}
        />
      </form>
    </div>
  );
}

function Moon() {
  return <img src={moon} alt="Toggle Darkmode" />;
}

export default DarkModeSelect;
