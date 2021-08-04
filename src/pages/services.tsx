import * as React from 'react';
import Header from "../layouts/header/Header";
import {Helmet} from "react-helmet"
import ServicesSection from "../sections/Services/Services";
// @ts-ignore
import * as styles from "../assets/css/global.module.css";

const Services = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Servicios - Samurai Dev</title>
            </Helmet>
            <div className={styles.backgroundServices}>
                <Header>
                    <ServicesSection/>
                </Header>
            </div>

        </>
    );
};

export default Services;