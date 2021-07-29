import * as React from "react";
// @ts-ignore
import * as styles from "./styles/Services.module.css";
import Title from "../../components/atoms/Title/Title";
import PackServices from "../../components/molecules/packServices/PackServices";
import Button from "../../components/atoms/Button/Button";
import { useEffect } from "react";
import ServiceProps from "./types/ServiceProps";
import ServicesCards from "../../components/organisms/servicesCards/ServicesCards";

const ServicesView: React.FC<ServiceProps> = ({ servicesCardsData }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.grid}>
      <Title cssClass={styles.mainTitle} content={"Servicios"} />
      <Title cssClass={styles.secondTitle} content={"Packs"} />
      <PackServices />
      <div
        className={styles.button}
        onClick={() => console.log("Button packs services")}
      ><p>{"Contactame"}</p></div>
      <Title cssClass={styles.thirdTitle} content={"Específicos"} />
      <ServicesCards
        servicesCardsData={servicesCardsData}
        cssClass={styles.servicesCards}
      />
    </div>
  );
};

export default ServicesView;
