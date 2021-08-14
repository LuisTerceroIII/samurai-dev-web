import * as React from "react";
import PackServicesView from "./PackServicesView";
import { graphql, useStaticQuery } from "gatsby";
import {useEffect, useState} from "react";
import { useMediaQuery } from "react-responsive";
import Service from "./types/Service";
// @ts-ignore
import * as styles from "./styles/packServices.module.css";


//TODO: SACAR QUERY DE AQUI, LLEVAR A SERVICE Y HACER LLEGAR AQUI!
const PackServices = () => {
  const [showParagraph, setShowParagraph] = useState(true)
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
    setShowParagraph(true);
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


  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 990px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 990px)" });
  const [viewport, setViewport] = useState({
    desktop: true,
    mobile: false,
  });

  let firstLoad = 0;

  useEffect(() => {
    console.log("dentro de resize");
    const handleResize = () => {
      if (isDesktopOrLaptop) {
        setViewport({
          desktop: true,
          mobile: false,
        });
      } else if (isTabletOrMobile) {
        setViewport({
          desktop: false,
          mobile: true,
        });
      }
      servicesData.forEach((service) => service.active = false)
      setShowParagraph(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <PackServicesView
        services={servicesData}
        serviceSelected={serviceSelected}
        changeService={changeService}
        arrowsStyles={arrowsStyles}
        viewport={viewport}
        showParagraph={showParagraph}
      />
    </>
  );
};

export default PackServices;
