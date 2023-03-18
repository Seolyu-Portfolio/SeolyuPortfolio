import React from "react";
import styles from "./OneOfTheProjects.module.css";

function OneOfTheProjects({ projects, onProjectClick }) {
  const handleProjectClick = (project) => {
    onProjectClick(project);
  };

  return (
    <ul className={styles.projectList}>
      {projects.map((project) => (
        <li
          key={project.id}
          className={styles.project}
          onClick={() => handleProjectClick(project)}
        >
          <div className={styles.logo}>
            <img
              className={styles.logoImg}
              src={project.logo}
              alt={project.logo}
            />
          </div>
          <div className={styles.title}>{project.title}</div>
        </li>
      ))}
    </ul>
  );
}

export default OneOfTheProjects;
