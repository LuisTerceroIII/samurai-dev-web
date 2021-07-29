import * as React from "react";
import { GatsbyImage,getImage } from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";
import {useEffect} from "react";
// @ts-ignore
import * as styles from './styles/IconBar.module.css';
import IconBarProps from "./types/IconBarProps";

const IconBar:React.FC<IconBarProps> = ({icons}): JSX.Element => {
    useEffect(() => {
        console.log(`DENTRO DE ICON BAR ::::: ${icons}`)
    },[])
  return (
      <div className={styles.container}>
          {
              icons.map(icon => (
                  <GatsbyImage alt={"tech icon"} image={getImage(icon.node.childImageSharp)} className={styles.image} key={icon.node.childImageSharp.id} />
              ))
          }
      </div>


  )
};

export default IconBar;
