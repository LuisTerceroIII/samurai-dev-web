import * as React from 'react';
// @ts-ignore
import * as styles from './styles/navBar.module.css'
import NavBarProps from "./types/NavBarProps";

const NavBarView: React.FC<NavBarProps> = ({ options }) => {
    return (
        <nav className={styles.navBarGrid}>
            {options.map(option => (
                <a>{option}</a>
            ))}
        </nav>
    );
};

export default NavBarView;