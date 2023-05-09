import React from "react";
import Logo from "../../assets/images/logo.svg"
import FontSelect from "../FontSelect";
import DarkModeSelect from "../DarkModeSelect";

function Header({ font, setFont, darkmodeOn, setDarkmodeOn }) {
  return (
    <header>
      <div>
        <img src={Logo} alt="Dictionary Search logo" />
      </div>

      <div className="selectors">
        <FontSelect font={font} setFont={setFont} />
        <div className="divider" />
        <DarkModeSelect darkmodeOn={darkmodeOn} setDarkmodeOn={setDarkmodeOn} />
      </div>
    </header>
  );
}

export default Header;
