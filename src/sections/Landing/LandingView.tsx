import * as React from "react";
import Button from "../../components/atoms/Button/Button";
import LandingProps from "./types/LandingProps";
import Title from "../../components/atoms/Title/Title";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { StaticImage } from "gatsby-plugin-image";

const LandingView: React.FC<LandingProps> = ({
  title,
  paragraph,
  button,
  styles,
}): JSX.Element => {
  return (
    <div className={styles.grid}>
      <Title cssClass={title.cssClass} content={title.content} />
      <StaticImage
        placeholder="blurred"
        src={"../../assets/images/Landing/landingImage.png"}
        alt={"My profile picture"}
        className={styles.image}
        objectFit={"contain"}
      />
      <Paragraph content={paragraph.content} cssClass={paragraph.cssClass} />
      <Button
        cssClass={button.cssClass}
        value={button.value}
        onClick={button.onClick}
        disable={button.disable}
      />
    </div>
  );
};

export default LandingView;
