import * as React from "react";
import Landing from "../sections/Landing/Landing";
import Header from "../layouts/header/Header";
// @ts-ignore
import * as styles from "../assets/css/global.module.css";
import {Helmet} from "react-helmet"
//TODO: Compartir varibales css desde un archivo.
const IndexPage = (): JSX.Element => {
  return (
    <div className={styles.global}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Samurai Dev</title>
        </Helmet>
    <div className={styles.backgroundLanding}>
        <Header>
            <Landing />
        </Header>
    </div>
    </div>
  );
};

export default IndexPage;
