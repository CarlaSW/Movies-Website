import { useState } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header({ query, setQuery, setClicked }) {
  const navigate = useNavigate();
  function handleSearch(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  function handleReturnToHome() {
    setQuery("");
    navigate("/");
  }
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <h1 onClick={handleReturnToHome} className={styles.logo}>
          🎥 CS Movies
        </h1>
      </div>

      <div className={styles.midHeader}>
        <form className={styles.form}>
          <input
            onChange={(e) => {
              handleSearch(e);
            }}
            className={styles.searchBar}
            type="text"
            value={query}
          ></input>
        </form>
      </div>
    </div>
  );
}
