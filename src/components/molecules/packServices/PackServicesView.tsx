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
  viewport,
  showParagraph,
}) => {

  useEffect(() => {
    console.log(showParagraph)
    console.log(viewport)

  },[showParagraph])
  return (
    <section className={styles.grid}>
      {services.map((service, key) => (
        <div
          className={styles.titleIconContainer}
          key={uuidv4()}

        >
          <span className={styles.titleBox} key={uuidv4()} onClick={() => changeService(service.id)}>
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
          content={showParagraph ? serviceSelected.description : ""}
          cssClass={styles.paragraph}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default PackServicesView;
