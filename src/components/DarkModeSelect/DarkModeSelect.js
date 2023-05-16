import React from "react";
import { CFormSwitch, CFormLabel } from "@coreui/react";

function DarkModeSelect({ darkmodeOn, setDarkmodeOn }) {
  return (
    // this handler also changes the mode when you click on the outer component/icon
    <form onClick={() => setDarkmodeOn(!darkmodeOn)} className="darkmodeform">
      <CFormLabel htmlFor="darkmodeswitch" className="visually-hidden">
        Toggle darkmode
      </CFormLabel>
      <CFormSwitch
        id="darkmodeswitch"
        checked={darkmodeOn}
        onChange={(event) => {
          setDarkmodeOn(event.target.checked);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        height="22px"
        width="22px"
        className="moon"
        role="img"
        aria-label="Moon icon"
      >
        <path
          fill="none"
          stroke="#838383"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </form>
  );
}

export default DarkModeSelect;
