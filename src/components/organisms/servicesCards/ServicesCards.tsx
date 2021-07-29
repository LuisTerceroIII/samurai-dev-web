import * as React from 'react';
import ServicesCardsView from "./ServicesCardsView";
import ServicesCardsProps from "./types/ServicesCardsProps";

const ServicesCards: React.FC<ServicesCardsProps> = ({servicesCardsData, cssClass}) => {

    return (
        <ServicesCardsView servicesCardsData={servicesCardsData} cssClass={cssClass}/>
    );
};

export default ServicesCards;