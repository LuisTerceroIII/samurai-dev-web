import * as React from "react";
import PackServicesView from "./PackServicesView";
import { graphql, useStaticQuery } from "gatsby";
import {useEffect, useState} from "react";
import Service from "./types/Service";

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
                }
              }
            }
          }
        }
      }
    }
  `);

  const servicesData = query.site.siteMetadata.sections.services.packsSection.servicesData;
  const [serviceSelected, setServiceSelected] = useState<Service>(servicesData[0]);
  const changeServiceSelected = (id: number) => {
    const newServiceSelected = servicesData.find(
      (service) => service.id === id
    );
    setServiceSelected(newServiceSelected);
  }; 

  useEffect(() => {
  },[serviceSelected])

  return (
    <PackServicesView
      services={servicesData}
      serviceSelected={serviceSelected}
      changeService={changeServiceSelected}
    />
  );
};

export default PackServices;
