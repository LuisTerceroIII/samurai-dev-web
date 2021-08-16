import * as React from "react";
import AboutMeView from "./AboutMeView";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { pageIsLoad, pageFailOnLoad, openSite } from "../../assets/js/utils";
// @ts-ignore
import * as styles from "./styles/AboutMe.module.css";

const AboutMe = () => {
  //States used to collect data and component styles. Receives data from gatsby-config file and styles from module.css.
  const [title, setTitle] = useState({});
  const [paragraph, setParagraph] = useState({});
  const [icon, setIcon] = useState({});

  //States used to detect the state of load of the component
  const [isLoading, setIsLoading] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    site: {
      siteMetadata: {
        sections: {
          aboutMe: { title: titulo, paragraph: parrafo, icon: icono },
        },
      },
    },
  } = useStaticQuery(graphql`
    query aboutMeData {
      site {
        siteMetadata {
          sections {
            aboutMe {
              icon {
                content
                cssClass
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

  useEffect(() => {
    const addClasses = async () => {
      try {
        setTitle({ ...title, cssClass: styles?.title });
        setParagraph({ ...paragraph, cssClass: styles?.paragraph });
        setIcon({ ...icon, cssClass: styles?.icon });
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
      {isLoading && <h6> </h6>}
      {isLoad && (
        <AboutMeView
          title={titulo}
          paragraph={parrafo}
          icon={icono}
          styles={styles}
        />
      )}
      {isError && <h3>ERROR</h3>}
    </>
  );
};

export default AboutMe;
