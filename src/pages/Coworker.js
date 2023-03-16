import React from "react";
import styles from "./Coworker.module.css";

function Coworker() {
  return (
    <div className={styles.Coworker}>
      <div className={styles.coworkerProgram}>
        <div className={styles.header}></div>
        <div className={styles.contents}>
          <div className={styles.sidebar}>Colleague Evaluations</div>
          <div className={styles.content}>안녕</div>
        </div>
      </div>
    </div>
  );
}

export default Coworker;
