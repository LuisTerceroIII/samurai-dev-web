import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {Link} from "gatsby";
// @ts-ignore
import * as styles from "./styles/LinksIconBar.module.css";
import LinksIconBarProps from "./types/LinksIconBarProps";

const LinksIconBar: React.FC<LinksIconBarProps> = ({ icons }): JSX.Element => {
  return (
    <div className={styles.container}>
      {icons.map((icon) => (
      <Link to={"www.google.com"}>
        <GatsbyImage
            alt={"icon"}
            image={getImage(icon.node.childImageSharp)}
            className={styles.image}
            key={icon.node.childImageSharp.id}
        />
      </Link>
      ))}
    </div>
  );
};

export default LinksIconBar;
