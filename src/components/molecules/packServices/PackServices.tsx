import * as React from "react";
import PackServicesView from "./PackServicesView";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";
import Service from "./types/Service";
// @ts-ignore
import * as styles from "./styles/packServices.module.css";

const PackServices = () => {

  const query = useStaticQuery(graphql`
    query servicesPacksData {
      site {
        siteMetadata {
          sections {
            services {
              packsSection {
                servicesData {
                  description
                  id
                  name
                  active
                }
              }
            }
          }
        }
      }
    }
  `);

  const [servicesData, setServicesData] = useState(
    query.site.siteMetadata.sections.services.packsSection.servicesData
  );

  const arrowsStyles = {
    normal: styles.iconContainer,
    invert: styles.invertIconContainer,
  };
  //Service that shows
  const [serviceSelected, setServiceSelected] = useState<Service>(
    servicesData[0]
  );

  const changeService = (id: number) => {
    changeServiceSelected(id);
    changeArrowDir(servicesData, id, setServicesData);
  };

  const changeServiceSelected = (id: number) => {
    setServiceSelected(servicesData.find((service) => service.id === id));
  };

  const changeArrowDir = (
    servicesData,
    id: number,
    setServicesData: (value: unknown) => void
  ) => {
    servicesData[id].active = true;
    for (let i = 0; i < servicesData.length; i++) {
      if (i != id) {
        servicesData[i].active = false;
      }
    }
    setServicesData(servicesData);
  };

  return (
    <>
      <PackServicesView
        services={servicesData}
        serviceSelected={serviceSelected}
        changeService={changeService}
        arrowsStyles={arrowsStyles}
      />
    </>
  );
};

export default PackServices;
