import * as React from "react";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import PackServicesProps from "./types/PackServicesProps";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import * as styles from "./styles/packServices.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const PackServicesView: React.FC<PackServicesProps> = ({
  services,
  serviceSelected,
  changeService,
  arrowsStyles,
}) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 990px)" });
  const [viewport, setViewport] = useState({
    desktop: true,
    mobile: false,
  });

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
      services.forEach((service) => service.active = false)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section className={styles.grid}>
      {services.map((service, key) => (
        <div
          className={styles.titleIconContainer}
          key={uuidv4()}
          onClick={() => changeService(service.id)}
        >
          <span className={styles.titleBox} key={uuidv4()}>
            <Title
              cssClass={styles.serviceName}
              content={service.name}
              key={uuidv4()}
            />
          </span>
          <span
            className={
              service.active ? arrowsStyles.normal : arrowsStyles.invert
            }
            key={uuidv4()}
            /*onClick={() => changeService(service.id)}*/
            onClick={() => changeService(service.id)}
          >
            <FontAwesomeIcon icon={faChevronDown} key={uuidv4()} />
          </span>
          {viewport.mobile ? (
            <Paragraph
              content={service.active ? service.description : ""}
              cssClass={styles.paragraph}
            />
          ) : (
            ""
          )}
        </div>
      ))}
      {viewport.desktop ? (
        <Paragraph
          content={serviceSelected.description}
          cssClass={styles.paragraph}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default PackServicesView;
