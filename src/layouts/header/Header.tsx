import * as React from "react";
// @ts-ignore
import * as styles from "./styles/Header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import NavBar from "../../components/molecules/NavBar/NavBar";

const Header: React.FC = ({ children }): JSX.Element => {
  return (
    <div>
      <header className={styles.header}>
        <StaticImage
          src={"../../assets/images/Logo/LOGO WEB HORIZONTAL_LOGO WEB HORIZONTAL COLOR.png"}
          alt={"logo"}
          className={styles.logo}
          placeholder="blurred"
          layout="fullWidth"
          objectFit={"contain"}
        />
        <span className={styles.menu}>
          <NavBar />
        </span>
      </header>
      {children}
    </div>
  );
};

export default Header;
