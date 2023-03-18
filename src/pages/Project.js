import React, { useState } from "react";
import OneOfTheProjects from "../components/OneOfTheProjects";
import styles from "./Project.module.css";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={styles.Project}>
      <div className={styles.projectProgram}>
        <div className={styles.header}></div>
        <div className={styles.contents}>
          <div className={styles.sidebar}>
            Projects
            <OneOfTheProjects
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </div>
          {selectedProject ? (
            <div className={styles.content}>
              <div className={styles.selectedProject}>
                {selectedProject.title}
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.defaultProject}>
                World Class Developer Seolyu
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
