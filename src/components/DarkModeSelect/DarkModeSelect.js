import React from "react";
import styles from "./DarkModeSelect.module.scss";
import moon from "../../assets/images/icon-moon.svg";
import { CFormSwitch } from "@coreui/react";

function DarkModeSelect({ darkmodeOn, setDarkmodeOn }) {
  return (
    <form className={styles.darkmodeform}>
      <CFormSwitch
        label={<Moon />}
        id="formSwitchCheckDefault"
        checked={darkmodeOn}
        onChange={(event) => {
          setDarkmodeOn(event.target.checked);
        }}
        className={styles.switch}
      />
    </form>
  );
}

function Moon() {
  return <img src={moon} alt="Toggle Darkmode" />;
}

export default DarkModeSelect;
