import React from "react";
import { CForm, CFormInput, CFormText } from "@coreui/react";

function Search({ handleSubmit, search, setSearch }) {
  
  const [submitEmpty, setSubmitEmpty] = React.useState(false);
  const [inputClasses, setInputClasses] = React.useState('input');

  return (
    <CForm
      onSubmit={(event) => {
        event.preventDefault();
        if (!search) {
          setSubmitEmpty(true);
          setInputClasses('input empty');
        } else {
          handleSubmit(search);
        }
      }}
    >
      <div className="inputwrapper">
        <CFormInput
          id="search-box"
          placeholder="Search for any word..."
          type="search"
          aria-label="Search the dictionary"
          className={inputClasses}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setSubmitEmpty(false);
            setInputClasses('input');
          }}
        >
        </CFormInput>

        <button id="searchbutton" aria-label="Submit search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </div>
      {submitEmpty && (
        <CFormText component="span" className="empty-help">
          Whoops, can't be empty...
        </CFormText>
      )}

    </CForm>
  );
}

export default Search;
