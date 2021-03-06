import * as React from "react";
import LandingProps from "./types/LandingProps";
import Title from "../../components/atoms/Title/Title";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {CreamButton} from "../../components/atoms/CreamButton/CreamButton";


const LandingView: React.FC<LandingProps> = ({
  title,
  paragraph,
  button,
  styles,
}): JSX.Element => {
  return (
    <div className={styles.grid}>
        <Title cssClass={title.cssClass} content={title.content}/>
        <StaticImage
            placeholder="TRACED_SVG"
            src={"../../assets/images/Landing/samurai2.png"}
            alt={"My profile picture"}
            className={styles.image}
            objectFit={"contain"}
            quality={100}
        />
        <Paragraph content={paragraph.content} cssClass={paragraph.cssClass}/>
        <Link to={"/services"} className={styles.linkTo}>
            <CreamButton value={button.value}/>
        </Link>
    </div>
  );
};

export default LandingView;
