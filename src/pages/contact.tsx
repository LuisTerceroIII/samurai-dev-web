import * as React from "react";
import { Helmet } from "react-helmet";
import ContactSection from "../sections/Contact/Contact";
import Header from "../layouts/header/Header";
// @ts-ignore
import * as styles from "../assets/css/global.module.css";
import PersonalInfoCard from "../components/organisms/PersonalInfoCard/PersonalInfoCard";
import AboutMeSection from "../sections/AboutMe/AboutMe";

const Contact = () => {
  return (
      <>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Contacto - Samurai Dev</title>
          </Helmet>
          <div className={styles.backgroundContact}>
              <Header>
                  <ContactSection/>
              </Header>
          </div>

      </>
  );
};

export default Contact;
