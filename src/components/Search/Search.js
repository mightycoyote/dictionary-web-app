import React from "react";
import { CForm, CFormLabel, CFormInput, CFormText } from "@coreui/react";
import styles from "./Search.module.scss";

function Search({ handleSubmit }) {
  const [search, setSearch] = React.useState("");
  const [emptyWarnClasses, setEmptyWarnClasses] = React.useState("hidden");

  return (
    <CForm
      onSubmit={(event) => {
        event.preventDefault();
        if (!search) {
          setEmptyWarnClasses("");
        } else {
          setEmptyWarnClasses("hidden");
          handleSubmit(search);
        }
      }}
    >
      <CFormLabel htmlFor="search-box" className="visually-hidden">
        Search the dictionary
      </CFormLabel>
      <div className={styles.inputwrapper}>
        <CFormInput
          id="search-box"
          placeholder="Search for any word..."
          className={styles.input}
          aria-describedby="empty-help"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        >
          
        </CFormInput>
        <button className={styles.button}>
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
      <CFormText component="span" id="empty-help" className={emptyWarnClasses}>
        Whoops, can't be empty...
      </CFormText>
    </CForm>
  );
}

export default Search;
