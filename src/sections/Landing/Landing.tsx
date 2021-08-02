import * as React from "react";
import LandingView from "./LandingView";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from "react";
import { pageIsLoad, pageFailOnLoad, openSite } from "../../assets/js/utils";
// @ts-ignore
import * as styles from "./styles/landing.module.css";
import LandingBackground from "./LandingBackground";

const Landing: React.FC = (): JSX.Element => {
  //Gets the data in the gatsby-config file
  const landingData = useStaticQuery(graphql`
    query landing {
      site {
        siteMetadata {
          sections {
            landing {
              button {
                disable
                value
                cssClass
                onClick
              }
              paragraph {
                content
                cssClass
              }
              title {
                content
                cssClass
              }
            }
          }
        }
      }
    }
  `);

  //States used to collect data and component styles. Receives data from gatsby-config file and styles from module.css.
  const [title, setTitle] = useState({});
  const [paragraph, setParagraph] = useState({});
  const [button, setButton] = useState({});

  //States used to detect the state of load of the component
  const [isLoading, setIsLoading] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  //In this useEffect I collect the data from gatsby-config.js and the styles from module.css in the state variables
  useEffect(() => {
    const addClasses = async () => {
      try {
        const { title, paragraph, button } =
          landingData.site.siteMetadata.sections.landing;
        setTitle({ ...title, cssClass: styles?.title });
        setParagraph({ ...paragraph, cssClass: styles?.paragraph });
        setButton({
          ...button,
          cssClass: styles?.button,
          onClick: () =>
            openSite(
              "https://luisterceroiii.github.io/Luis-Espinoza-Navarrete/"
            ),
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    };
    addClasses()
      .then((res) => {
        if (res) {
          pageIsLoad(setIsLoading, setIsLoad, setIsError);
        }
      })
      .catch((e) => {
        pageFailOnLoad(setIsLoading, setIsLoad, setIsError);
        console.log(e);
      });
  }, [isLoad]);

  return (
    <>
      {isLoading && <h6>Loading...</h6>}
      {isLoad && (

          <LandingView
              button={button}
              paragraph={paragraph}
              title={title}
              styles={styles}
          />

      )}
      {isError && <h3>ERROR</h3>}
    </>
  );
};
export default Landing;
