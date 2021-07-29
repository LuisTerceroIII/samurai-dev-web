import * as React from "react";
// @ts-ignore
import * as styles from "./styles/navBar.module.css";
import NavBarProps from "./types/NavBarProps";
import { v4 as uuidv4 } from "uuid";

const NavBarView: React.FC<NavBarProps> = ({ options }) => {
  return (
    <nav className={styles.navBarGrid}>
      {options.map((option) => (
        <a key={uuidv4()}>{option}</a>
      ))}
    </nav>
  );
};

export default NavBarView;
