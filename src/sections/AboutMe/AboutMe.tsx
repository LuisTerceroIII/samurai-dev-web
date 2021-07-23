import * as React from "react";
import AboutMeView from "./AboutMeView";
import { graphql, useStaticQuery } from "gatsby";
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive'
// @ts-ignore
import * as desktopStyles from "./styles/AboutMeDesktop.module.css";
// @ts-ignore
import * as mobileStyles from "./styles/AboutMeMobile.module.css";
const AboutMe = () => {

  const [styles, setStyles] = useState({
    title: undefined,
    paragraph: undefined,
    icon: undefined
  });

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  //States used to collect data and component styles. Receives data from gatsby-config file and styles from module.css.
  const [title, setTitle] = useState({})
  const [paragraph, setParagraph] = useState({})
  const [icon, setIcon] = useState({})

  //States used to detect the state of load of the component
  const [isLoading, setIsLoading] = useState(true)
  const [isLoad, setIsLoad] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (isDesktopOrLaptop) {
        setStyles(desktopStyles);
      } else if (isTabletOrMobile) {
        setStyles(mobileStyles)
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize);
  })

  const {
    site: {
      siteMetadata: {
        sections: {
          aboutMe: { title:titulo, paragraph:parrafo, icon:icono },
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
          setTitle({ ...title, cssClass: styles?.title })
          setParagraph({ ...paragraph, cssClass: styles?.paragraph })
          setIcon({...icon,cssClass: styles?.icon})
          return true;
        } catch (e) {
          console.log(e)
          return false;
        }
      }

      addClasses().then(res => { if (res) {
        pageIsLoad(setIsLoading, setIsLoad, setIsError);
      } }).catch(e => {
        pageFailOnLoad(setIsLoading, setIsLoad, setIsError);
        console.log(e)
      })

    }, [styles,isLoad])

  return (
      <>
        {isLoading && <h6>Loading...</h6>}
        {isLoad && <AboutMeView title={titulo} paragraph={parrafo} icon={icono} styles={styles}/>}
        {isError && <h3>ERROR</h3>}
      </>
  );
};

const pageIsLoad = (setIsLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void, setIsLoad: (value: (((prevState: boolean) => boolean) | boolean)) => void, setIsError: (value: (((prevState: boolean) => boolean) | boolean)) => void) => {
  setIsLoading(false)
  setIsLoad(true)
  setIsError(false)
}

const pageFailOnLoad = (setIsLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void, setIsLoad: (value: (((prevState: boolean) => boolean) | boolean)) => void, setIsError: (value: (((prevState: boolean) => boolean) | boolean)) => void) => {
  setIsLoading(false)
  setIsLoad(false)
  setIsError(true)
}

export default AboutMe;
