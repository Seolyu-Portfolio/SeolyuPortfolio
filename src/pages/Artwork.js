import React, { useState } from "react";
import OneOfTheArtworks from "../components/OneOfTheArtworks";
import styles from "./Artwork.module.css";

function Artwork() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "StudyDay",
      logo: "/studyDayLogo.png",
    },
    {
      id: 2,
      title: "BucketNote",
      logo: "/bucketNoteLogo.png",
    },
    {
      id: 3,
      title: "SoYuMovie",
      logo: "/soYuMovieLogo.png",
    },
    {
      id: 4,
      title: "WAPLPet",
      logo: "/waplPetLogo.png",
    },
    {
      id: 5,
      title: "그림일기",
      logo: "/profile.png",
    },
    {
      id: 6,
      title: "도감",
      logo: "/profile.png",
    },
  ];

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div className={styles.Artwork}>
      <div className={styles.artworkProgram}>
        <div className={styles.header}></div>
        <div className={styles.contents}>
          <div className={styles.sidebar}>
            Artworks
            <OneOfTheArtworks
              artworks={artworks}
              onArtworkClick={handleArtworkClick}
            />
          </div>
          {selectedArtwork ? (
            <div className={styles.content}>
              <div className={styles.selectedArtwork}>
                {selectedArtwork.title}
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.defaultArtwork}>
                World Class Developer Seolyu
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Artwork;
