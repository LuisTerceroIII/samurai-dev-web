import * as React from "react";
// @ts-ignore
import * as styles from "./styles/Services.module.css";
import Title from "../../components/atoms/Title/Title";
import PackServices from "../../components/molecules/packServices/PackServices";
import ServiceProps from "./types/ServiceProps";
import ServicesCards from "../../components/organisms/servicesCards/ServicesCards";
import { Link } from "gatsby";

const ServicesView: React.FC<ServiceProps> = ({ servicesCardsData }) => {
  return (
    <div className={styles.grid}>
      <Title cssClass={styles.mainTitle} content={"Servicios"} />
      <Title cssClass={styles.secondTitle} content={"Paquetes"} />
      <PackServices />
      <div className={styles.button}>
        <Link to={"/contact"}>{"Contactame"}</Link>
      </div>
      <Title cssClass={styles.thirdTitle} content={"Específicos"} />
      <ServicesCards
        servicesCardsData={servicesCardsData}
        cssClass={styles.servicesCards}
      />
    </div>
  );
};

export default ServicesView;
