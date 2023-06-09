import React from "react";
// import Logo from "../../assets/images/logo.svg";
import FontSelect from "../FontSelect";
import DarkModeSelect from "../DarkModeSelect";

function Header({ font, setFont, darkmodeOn, setDarkmodeOn }) {
  return (
    <header>
      <div>
        <svg
          role="img"
          aria-label="Dictionary search app logo representing a book"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </div>

      <div className="selectors">
        <FontSelect font={font} setFont={setFont} />
        <div className="divider"> </div>
        <DarkModeSelect darkmodeOn={darkmodeOn} setDarkmodeOn={setDarkmodeOn} />
      </div>
    </header>
  );
}

export default Header;
