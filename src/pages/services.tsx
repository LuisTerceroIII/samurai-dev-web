import * as React from 'react';
import Header from "../layouts/header/Header";
import {Helmet} from "react-helmet"
import ServicesSection from "../sections/Services/Services";


const Services = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Servicios - Samurai Dev</title>
            </Helmet>
            <Header>
                <ServicesSection/>
            </Header>
        </>
    );
};

export default Services;