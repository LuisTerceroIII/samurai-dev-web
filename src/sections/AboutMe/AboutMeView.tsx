import * as React from "react";
import Title from "../../components/atoms/Title/Title";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import AboutMeProps from "./types/AboutMeProps";

const AboutMeView: React.FC<AboutMeProps> = ({
  title,
  paragraph,
  icon,
  styles,
}): JSX.Element => {
  return (
    <section className={styles.mainContainer}>
      <Title content={title.content} cssClass={styles.title} />
      <Paragraph content={paragraph.content} cssClass={styles.paragraph} />
      <StaticImage
        src={"../../assets/images/AboutMe/aboutMe.png"}
        alt={"me"}
        className={styles.image}
        placeholder="blurred"
        objectFit={"contain"}
      />
      <a
        href={
          " https://drive.google.com/uc?export=download&id=1B_9IL0JMWtAwZWq4DUCllLeKHPZCV_55"
        }
      >
        <StaticImage
          src={"../../assets/images/AboutMe/iconCV.png"}
          alt={"icon CV"}
          className={styles.icon}
          objectFit={"contain"}
        />
      </a>
    </section>
  );
};

export default AboutMeView;
