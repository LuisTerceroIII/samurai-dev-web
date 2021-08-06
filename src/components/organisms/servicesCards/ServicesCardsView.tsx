import * as React from "react";
// @ts-ignore
import * as styles from "./styles/servicesCards.module.css";
import ServicesCardsProps from "./types/ServicesCardsProps";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

const ServicesCardsView: React.FC<ServicesCardsProps> = ({
  servicesCardsData,
  cssClass,
}) => {
  return (
    <div className={`${styles.grid}, ${cssClass}`}>
      {servicesCardsData.map((serviceCardData, index) => (
        <ServiceCard
          description={serviceCardData.description}
          icons={serviceCardData?.icons}
          image={serviceCardData.image}
          name={serviceCardData.name}
          title={serviceCardData.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default ServicesCardsView;
