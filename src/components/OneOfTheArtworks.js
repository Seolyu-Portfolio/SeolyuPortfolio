import React from "react";
import styles from "./OneOfTheArtworks.module.css";

function OneOfTheArtworks({ artworks, onArtworkClick }) {
  const handleArtworkClick = (artwork) => {
    onArtworkClick(artwork);
  };

  return (
    <ul className={styles.artworkList}>
      {artworks.map((artwork) => (
        <li
          key={artwork.id}
          className={styles.artwork}
          onClick={() => handleArtworkClick(artwork)}
        >
          <div className={styles.logo}>
            <img
              className={styles.logoImg}
              src={artwork.logo}
              alt={artwork.logo}
            />
          </div>
          <div className={styles.title}>{artwork.title}</div>
        </li>
      ))}
    </ul>
  );
}

export default OneOfTheArtworks;
