import * as React from "react";
// @ts-ignore
import * as styles from "../assets/css/global.module.css";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../layouts/header/Header";
import Title from "../components/atoms/Title/Title";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>En construcción - Samurai Dev</title>
      </Helmet>

      <div className={`${styles.backgroundLanding}`}>
        <Header>
          <div className={styles.projectsGrid}>
            <StaticImage
              className={styles.image}
              objectFit={"contain"}
              src={"../assets/images/Projects/herramientas-para-reparar.png"}
              alt={"tools"}
            />
            <div className={styles.titleBox}>
              <Title
                cssClass={styles.titleProject}
                content={"Sección en construcción"}
              />
            </div>
          </div>
        </Header>
      </div>
    </div>
  );
};

export default Projects;
