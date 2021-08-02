import * as React from "react";
import Landing from "../sections/Landing/Landing";
import Header from "../layouts/header/Header";
// @ts-ignore
import * as styles from "../assets/css/global.module.css";
import AboutMe from "../sections/AboutMe/AboutMe";
import Services from "../sections/Services/Services";
//TODO: Compartir varibales css desde un archivo.
const IndexPage = (): JSX.Element => {
  return (
    <div className={styles.global}>
      <Header>
        <Landing />
       {/* <AboutMe />
        <Services />*/}
      </Header>
    </div>
  );
};

export default IndexPage;
