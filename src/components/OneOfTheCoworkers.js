import React from "react";
import styles from "./OneOfTheCoworkers.module.css";

function OneOfTheCoworkers({ coworkers, onCoworkerClick }) {
  const handleCoworkerClick = (coworker) => {
    onCoworkerClick(coworker);
  };

  return (
    <ul className={styles.coworkerList}>
      {coworkers.map((coworker) => (
        <li
          key={coworker.id}
          className={styles.coworker}
          onClick={() => handleCoworkerClick(coworker)}
        >
          <div className={styles.profile}>
            <img
              className={styles.avatar}
              src={coworker.avatar}
              alt={coworker.avatar}
            />
            <div
              className={`${styles.circle} ${
                coworker.status === "Online" ? styles.filled : ""
              }`}
            ></div>
          </div>
          <div className={styles.name}>{coworker.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default OneOfTheCoworkers;
