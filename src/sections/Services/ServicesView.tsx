import * as React from "react";
// @ts-ignore
import * as styles from "./styles/Services.module.css";
import Title from "../../components/atoms/Title/Title";
import PackServices from "../../components/molecules/packServices/PackServices";
import ServiceProps from "./types/ServiceProps";
import ServicesCards from "../../components/organisms/servicesCards/ServicesCards";
import { Link } from "gatsby";
import {CreamButton} from "../../components/atoms/CreamButton/CreamButton";
import {DeepBlueButton} from "../../components/atoms/DeepBlueButton/DeepBlueButton";



const ServicesView: React.FC<ServiceProps> = ({ servicesCardsData,buttonContent }) => {
  return (
    <div className={styles.grid}>
        <Title cssClass={styles.mainTitle} content={"Servicios"}/>

        <PackServices/>
        <Link to={"/contact"} className={styles.linkTo}>
            <DeepBlueButton buttonContent={buttonContent}/>
        </Link>
        <Title cssClass={styles.thirdTitle} content={"Otros"}/>
        <ServicesCards
            servicesCardsData={servicesCardsData}
            cssClass={styles.servicesCards}
        />
    </div>
  );
};

export default ServicesView;
