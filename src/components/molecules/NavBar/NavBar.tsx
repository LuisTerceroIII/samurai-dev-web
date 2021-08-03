import * as React from "react";
import NavBarView from "./NavBarView";
import { graphql, useStaticQuery } from "gatsby";

const NavBar = () => {
  const navOptionsQuery = useStaticQuery(graphql`
    query navOption {
      site {
        siteMetadata {
            navBar {
              option
              redirect
            }
        }
      }
    }
  `);
  const options = navOptionsQuery.site.siteMetadata.navBar;
  return <NavBarView options={options} />;
};

export default NavBar;
