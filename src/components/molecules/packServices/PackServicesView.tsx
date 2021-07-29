import * as React from "react";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import PackServicesProps from "./types/PackServicesProps";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import * as styles from "./styles/packServices.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const PackServicesView: React.FC<PackServicesProps> = ({
  services,
  serviceSelected,
  changeService,
  arrowsStyles,
}) => {
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
            onClick={() => changeService(service.id)}
          >
            <FontAwesomeIcon icon={faSortDown} key={uuidv4()} />
          </span>
        </div>
      ))}
      <Paragraph
        content={serviceSelected.description}
        cssClass={styles.paragraph}
      />
    </section>
  );
};

export default PackServicesView;
