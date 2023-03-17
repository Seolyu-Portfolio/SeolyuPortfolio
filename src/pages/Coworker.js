import React from 'react';
import OneOfTheCoworkers from '../components/OneOfTheCoworkers';
import styles from './Coworker.module.css';

function Coworker() {
  const coworkers = [
    {
      id: 1,
      name: 'Sy',
      status: 'Online',
      avatar: '../assets/profile.png',
    },
    {
      id: 2,
      name: 'Ys',
      status: 'Offline',
      avatar: '../assets/profile.png',
    },
    {
      id: 3,
      name: 'Le',
      status: 'Online',
      aavatar: '../assets/profile.png',
    },
  ];

  return (
    <div className={styles.Coworker}>
      <div className={styles.coworkerProgram}>
        <div className={styles.header}></div>
        <div className={styles.contents}>
          <div className={styles.sidebar}>
            Colleague Evaluations
            <OneOfTheCoworkers coworkers={coworkers} />
          </div>
          <div className={styles.content}>안녕</div>
        </div>
      </div>
    </div>
  );
}

export default Coworker;
