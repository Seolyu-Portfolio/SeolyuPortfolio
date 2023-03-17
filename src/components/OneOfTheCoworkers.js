import React from 'react';
import styles from './OneOfTheCoworkers.module.css';

function OneOfTheCoworkers({ coworkers }) {
  return (
    <ul className={styles.coworkerList}>
      {coworkers.map((coworker) => (
        <li key={coworker.id} className={styles.coworker}>
          <div>
            <img src={coworker.avatar} alt={coworker.avatar} />
            <div>{coworker.status}</div>
          </div>
          <div>{coworker.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default OneOfTheCoworkers;
