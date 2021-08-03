import * as React from "react";
// @ts-ignore
import * as styles from "./styles/Header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import NavBar from "../../components/molecules/NavBar/NavBar";
import { Link} from "gatsby";

const Header: React.FC = ({ children }): JSX.Element => {
  return (
    <div>
      <header className={styles.header}>
          <Link to={"/"}>
              <StaticImage
                  src={
                      "../../assets/images/Logo/LOGO WEB HORIZONTAL_LOGO WEB HORIZONTAL COLOR.png"
                  }
                  alt={"logo"}
                  className={styles.logo}
                  placeholder="TRACED_SVG"
                  layout="fullWidth"
                  objectFit={"contain"}
              />
          </Link>
        <span className={styles.menu}>
          <NavBar />
        </span>
      </header>
      {children}
    </div>
  );
};

export default Header;
