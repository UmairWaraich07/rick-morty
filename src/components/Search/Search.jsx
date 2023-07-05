import React, { useState } from "react";
import styles from "./Search.module.css";

export const Search = ({ setName, setPageNumber }) => {
  const [input, setInput] = useState("");

  const search = (e) => {
    setInput(e.target.value);
    setPageNumber(1);
    setName(input);
  };

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5">
      <input
        type="text"
        value={input}
        className={styles.input}
        onChange={(e) => search(e)}
        placeholder="Search your character"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};
