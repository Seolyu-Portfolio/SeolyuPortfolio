import React, { useState } from "react";
import OneOfTheCoworkers from "../components/OneOfTheCoworkers";
import styles from "./Coworker.module.css";

function Coworker() {
  const [selectedCoworker, setSelectedCoworker] = useState(null);

  const coworkers = [
    {
      id: 1,
      name: "Sy",
      status: "Online",
      avatar: "/profile.png",
      comment: "I would like to recommend my ex-colleague 'Seolyu'.",
      reaction: {
        emoji: "/emoji1.png",
        num: "4",
      },
    },
    {
      id: 2,
      name: "Ys",
      status: "Offline",
      avatar: "/profile.png",
      comment: "안녕2",
    },
    {
      id: 3,
      name: "Le",
      status: "Online",
      avatar: "/profile.png",
      comment: "She is the best programmer",
    },
  ];

  const handleCoworkerClick = (coworker) => {
    setSelectedCoworker(coworker);
  };

  return (
    <div className={styles.Coworker}>
      <div className={styles.coworkerProgram}>
        <div className={styles.header}></div>
        <div className={styles.contents}>
          <div className={styles.sidebar}>
            Colleague Evaluations
            <OneOfTheCoworkers
              coworkers={coworkers}
              onCoworkerClick={handleCoworkerClick}
            />
          </div>
          {selectedCoworker ? (
            <div className={styles.content}>
              <div className={styles.profileCard}>
                <div className={styles.profile}>
                  <img
                    className={styles.avatar}
                    src={selectedCoworker.avatar}
                    alt={selectedCoworker.avatar}
                  />
                  <div
                    className={`${styles.circle} ${
                      selectedCoworker.status === "Online" ? styles.filled : ""
                    }`}
                  ></div>
                </div>
                <div className={styles.name}>{selectedCoworker.name}</div>
              </div>
              <div className={styles.coworkerComment}>
                <div className={styles.profileCardBelow}>
                  <div className={styles.profile}>
                    <img
                      className={styles.avatar}
                      src={selectedCoworker.avatar}
                      alt={selectedCoworker.avatar}
                    />
                    <div
                      className={`${styles.circle} ${
                        selectedCoworker.status === "Online"
                          ? styles.filled
                          : ""
                      }`}
                    ></div>
                  </div>
                  <div className={styles.nameComment}>
                    <div className={styles.nameText}>
                      {selectedCoworker.name}
                    </div>
                    <div className={styles.commentText}>
                      {selectedCoworker.comment}
                    </div>
                    {selectedCoworker.reaction ? (
                      <div className={styles.reaction}>
                        <img
                          className={styles.reactionEmoji}
                          src={selectedCoworker.reaction.emoji}
                          alt={selectedCoworker.reaction}
                        />
                        <div className={styles.reactionNum}>
                          {selectedCoworker.reaction.num}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.sendMessage}>
                <div className={styles.sendMessageHeader}></div>
                <div className={styles.sendMessageComment}>
                  {selectedCoworker.comment}
                </div>
                <img
                  className={styles.sendBtn}
                  src={`/paperplane.png`}
                  alt="send button"
                />
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.defaultComment}>
                World Class Developer Seolyu
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coworker;
