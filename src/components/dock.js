import { Link } from "react-router-dom";
import styles from "./dock.module.css";
import artwork from "../assets/artwork.png";
import coworker from "../assets/coworker.png";
import project from "../assets/project.png";

function Dock() {
  return (
    <div className={styles.dock}>
      <div className={styles.icon}>
        <Link to="/artwork">
          <img src={artwork} alt="artwork" />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link to="/coworker">
          <img src={coworker} alt="coworker" />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link to="/project">
          <img src={project} alt="project" />
        </Link>
      </div>
    </div>
  );
}

export default Dock;
