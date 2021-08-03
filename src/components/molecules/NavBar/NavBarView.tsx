import * as React from "react";
// @ts-ignore
import * as styles from "./styles/navBar.module.css";
import NavBarProps from "./types/NavBarProps";
import { v4 as uuidv4 } from "uuid";
import { Link } from "gatsby";

const NavBarView: React.FC<NavBarProps> = ({ options }) => {
  return (
    <nav className={styles.navBarGrid}>
      {options.map((option) => (
        <Link key={uuidv4()} to={option.redirect} className={styles.link}>
          {option.option}
        </Link>
      ))}
    </nav>
  );
};

export default NavBarView;
