import * as React from 'react';
import LandingView from "./LandingView";
// @ts-ignore
import * as desktopStyles from "./styles/landingDesktop.module.css";
// @ts-ignore
import * as mobileStyles from "./styles/LandingMobile.module.css";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'



const Landing: React.FC = (): JSX.Element => {
  //State that saves the css style to use, the change depends on the screen size.
  const [styles, setStyles] = useState({
    title: undefined,
    paragraph: undefined,
    button: undefined
  })
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
`)

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  //States used to collect data and component styles. Receives data from gatsby-config file and styles from module.css.
  const [title, setTitle] = useState({})
  const [paragraph, setParagraph] = useState({})
  const [button, setButton] = useState({})

  //States used to detect the state of load of the component
  const [isLoading, setIsLoading] = useState(true)
  const [isLoad, setIsLoad] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    console.log("dentro de resize")
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

  useEffect(() => {
    const addClasses = async () => {
      try {
        const { title, paragraph, button } = landingData.site.siteMetadata.sections.landing
        setTitle({ ...title, cssClass: styles?.title })
        setParagraph({ ...paragraph, cssClass: styles?.paragraph })
        setButton({ ...button, cssClass: styles?.button, onClick: () => openSite('https://luisterceroiii.github.io/Luis-Espinoza-Navarrete/') })
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
  }, [isLoad, styles])

  return (
    <>
      {isLoading && <h6>Loading...</h6>}
      {isLoad && <LandingView button={button} paragraph={paragraph} title={title} styles={styles} />}
      {isError && <h3>ERROR</h3>}
    </>
  );
};
export default Landing;

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

const openSite = (url: string): Window => window.open(url)
