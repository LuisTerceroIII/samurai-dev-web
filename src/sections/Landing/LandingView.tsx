import * as React from "react";
import LandingProps from "./types/LandingProps";
import Title from "../../components/atoms/Title/Title";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import  { Link} from "gatsby";


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
        placeholder="TRACED_SVG"
        src={"../../assets/images/Landing/profile-pic.png"}
        alt={"My profile picture"}
        className={styles.image}
        objectFit={"contain"}
      />
      <Paragraph content={paragraph.content} cssClass={paragraph.cssClass} />
      <div className={button.cssClass}>
          <Link  to={"/aboutMe"}>{button.value}</Link>
      </div>
    </div>
  );
};

export default LandingView;
