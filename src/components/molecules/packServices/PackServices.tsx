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

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 750px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const [showParagraph, setShowParagraph] = useState(false)
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
  const [openService, setOpenService] = useState(false)

  useEffect( () => {
    handleResize()
  },[])

  useEffect(  () => {
  },[serviceSelected,showParagraph])

  const chooseService = (service) => {

    if(service.id === serviceSelected.id && openService) {
      service.active = false;
      setServiceSelected(service)
      servicesData[service.id] = serviceSelected
      setServicesData([...servicesData])
      setShowParagraph(false)
      setOpenService(false)
    } else {
      service.active = true;
      setServiceSelected(service)
      servicesData[service.id].active = true;
      setServicesData([...servicesData])
      setShowParagraph(true)
      setOpenService(true)
    }
  }


  const [viewport, setViewport] = useState({
    desktop: false,
    mobile: false,
  });

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
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      servicesData.forEach(service => service.active = false)
    }

  });

  return (
    <>
      <PackServicesView
        services={servicesData}
        serviceSelected={serviceSelected}
        changeService={chooseService}
        arrowsStyles={arrowsStyles}
        viewport={viewport}
        showParagraph={showParagraph}
      />
    </>
  );
};

export default PackServices;
