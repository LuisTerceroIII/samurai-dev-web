import * as React from 'react';
import AboutMeSection from "../sections/AboutMe/AboutMe";
import Header from "../layouts/header/Header";
import {Helmet} from "react-helmet"
// @ts-ignore
import * as styles from '../assets/css/global.module.css';
const AboutMe = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sobre mi - Samurai Dev</title>
            </Helmet>
            <div className={styles.backgroundAboutMe}>
                <Header>
                    <AboutMeSection/>
                </Header>
            </div>

        </>
    );
};

export default AboutMe;