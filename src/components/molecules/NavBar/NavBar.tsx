import * as React from "react";
import NavBarView from "./NavBarView";
import { graphql, useStaticQuery } from "gatsby";

const NavBar = () => {
  const navOptionsQuery = useStaticQuery(graphql`
    query navOption {
      site {
        siteMetadata {
          sections {
            landing {
              navOption
            }
          }
        }
      }
    }
  `);
  const options = navOptionsQuery.site.siteMetadata.sections.landing.navOption;
  return <NavBarView options={options} />;
};

export default NavBar;
