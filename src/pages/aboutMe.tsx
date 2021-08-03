import * as React from 'react';
import AboutMeSection from "../sections/AboutMe/AboutMe";
import Header from "../layouts/header/Header";
import {Helmet} from "react-helmet"
const AboutMe = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sobre mi - Samurai Dev</title>
            </Helmet>
            <Header>
                <AboutMeSection/>
            </Header>
        </>
    );
};

export default AboutMe;