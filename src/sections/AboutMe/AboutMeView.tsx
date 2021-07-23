import * as React from 'react'
import Title from '../../components/atoms/Title/Title'
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import {StaticImage} from "gatsby-plugin-image";
import AboutMeProps from "./types/AboutMeProps";

const AboutMeView:React.FC<AboutMeProps> = ({title, paragraph, icon,styles}) : JSX.Element => {
    return (
        <section>
            <Title content={title.content} cssClass={styles.title}/>
            <Paragraph content={paragraph.content} cssClass={styles.paragraph}/>
          {/*  <StaticImage src={} alt={}/>*/}
          {/*  <Icon/>*/}
        </section>
    )
}

export default AboutMeView

