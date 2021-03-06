import * as React from "react";
// @ts-ignore
import * as styles from "./styles/serviceCard.module.css";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import IconBar from "../IconBar/IconBar";
import ServiceCardProps from "./types/ServiceCardProps";

const ServiceCardView: React.FC<ServiceCardProps> = ({
  name,
  title,
  description,
  image,
  icons = [],
}) => {
  return (
    <div className={styles.mainBoxLeft}>

      <div className={styles.imageBox}>
        <GatsbyImage
          image={getImage(image)}
          className={styles.image}
          alt={name}
          objectFit={"contain"}
        />
      </div>

      <div className={styles.descriptionBox}>
          <Title cssClass={styles.title} content={title} />
          <Paragraph content={description} cssClass={styles.description} />
          {icons ? (
              <div className={styles.iconBar}>
                  <IconBar icons={icons} />
              </div>
          ) : (
              <></>
          )}
      </div>
    </div>
  );
};

export default ServiceCardView;
