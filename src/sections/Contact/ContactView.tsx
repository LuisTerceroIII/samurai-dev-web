import * as React from 'react';
// @ts-ignore
import * as styles from './styles/contact.module.css';
import {StaticImage} from "gatsby-plugin-image";
import PersonalInfoCard from "../../components/organisms/PersonalInfoCard/PersonalInfoCard";

const ContactView = () => {
    return (
      <div className={styles.mainContainer}>
          <div className={styles.contactContainer}>
              <div className={styles.personalCardInfoBox}>
                  <PersonalInfoCard/>
              </div>
              <StaticImage
                  className={styles.image}
                  src={"../../assets/images/Contact/buzon.png"}
                  alt={"mail box"}
                  objectFit={"contain"}
                  placeholder="TRACED_SVG"
              />
          </div>
      </div>
    );
};

export default ContactView;