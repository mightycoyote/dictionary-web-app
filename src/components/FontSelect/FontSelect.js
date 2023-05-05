import React from "react";
import { CFormSelect } from "@coreui/react";

function FontSelect({ font, setFont }) {
  return (
    <form>
      <label htmlFor="fontselect" className="visually-hidden">
        Font Select
      </label>
      <CFormSelect
        id="fontselect"
        value={font}
        onChange={(event) => {
          setFont(event.target.value);
        }}
      >
        <option value="sanserif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </CFormSelect>
    </form>
  );
}

export default FontSelect;
