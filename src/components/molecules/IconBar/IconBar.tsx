import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// @ts-ignore
import * as styles from "./styles/IconBar.module.css";
import IconBarProps from "./types/IconBarProps";

const IconBar: React.FC<IconBarProps> = ({ icons }): JSX.Element => {
  return (
    <div className={styles.container}>
      {icons.map((icon) => (
        <GatsbyImage
          alt={"icon"}
          image={getImage(icon.node.childImageSharp)}
          className={styles.image}
          key={icon.node.childImageSharp.id}
        />
      ))}
    </div>
  );
};

export default IconBar;
