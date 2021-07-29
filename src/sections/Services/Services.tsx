import * as React from "react";
import ServicesView from "./ServicesView";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from "react";

const Services = () => {
  /*  const backendIcons = useStaticQuery(graphql``)
    const backendImage = useStaticQuery(graphql``)
    const backendData = useStaticQuery(graphql``)
    const frontendIcons = useStaticQuery(graphql``)
    const frontendImage = useStaticQuery(graphql``)
    const frontendData = useStaticQuery(graphql``)
    const fullstackImage = useStaticQuery(graphql``)
    const fullstackData = useStaticQuery(graphql``)
    const maintenanceImage = useStaticQuery(graphql``)
    const maintenanceData = useStaticQuery(graphql``)
    const webDesignImage = useStaticQuery(graphql``)
    const webDesignData = useStaticQuery(graphql``)*/

  //const backendIcons:any[] = backendIconsQuery.allFile.edges;

  const data = useStaticQuery(graphql`
    query serviceData {
      texts: site {
        siteMetadata {
          sections {
            services {
              title
              packsSection {
                title
                buttonMessage
              }
              specific {
                title
                backend {
                  description
                  title
                }
                frontend {
                  description
                  title
                }
                fullstack {
                  description
                  title
                }
                maintenance {
                  description
                  title
                }
                webDesign {
                  description
                  title
                }
              }
            }
          }
        }
      }

      backendIcons: allFile(filter: { sourceInstanceName: { eq: "backend" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: PNG
                placeholder: BLURRED
                width: 40
                transformOptions: { fit: COVER }
                height: 40
              )
              id
            }
          }
        }
      }

      frontendIcons: allFile(
        filter: { sourceInstanceName: { eq: "frontend" } }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: PNG
                placeholder: BLURRED
                width: 40
                transformOptions: { fit: CONTAIN }
                height: 40
              )
              id
            }
          }
        }
      }

      backendImage: file(relativePath: { regex: "/backend.png/" }) {
        childImageSharp {
          gatsbyImageData(
            formats: PNG
            height: 130
            width: 130
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      frontendImage: file(relativePath: { regex: "/frontend.png/" }) {
        childImageSharp {
          gatsbyImageData(
            formats: PNG
            height: 130
            width: 130
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      fullstackImage: file(relativePath: { regex: "/fullstack.png/" }) {
        childImageSharp {
          gatsbyImageData(
            formats: PNG
            height: 130
            width: 130
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }

      maintenanceImage: file(relativePath: { regex: "/maintenance.png/" }) {
        childImageSharp {
          gatsbyImageData(
            formats: PNG
            height: 130
            width: 130
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }

      webDesignImage: file(relativePath: { regex: "/webDesign.png/" }) {
        childImageSharp {
          gatsbyImageData(
            formats: PNG
            height: 130
            width: 130
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const serviceTexts = data.texts.siteMetadata.sections.services;
  useEffect(() => {
    console.log(serviceTexts);
  }, []);
  const firstTitle = serviceTexts.title;
  const secondTitle = serviceTexts.packsSection.title;
  const thirdTitle = serviceTexts.specific.title;
  const buttonContent = serviceTexts.packsSection.buttonMessage;

  useEffect(() => {
    console.log(data.backendImage.childImageSharp);
  }, []);

  const servicesCardsData = [
    {
      //BACKEND
      name: serviceTexts.specific.backend.title,
      icons: data.backendIcons.edges,
      image: data.backendImage.childImageSharp,
      title: serviceTexts.specific.backend.title,
      description: serviceTexts.specific.backend.description,
      left: true,
    },
    {
      name: serviceTexts.specific.frontend.title,
      icons: data.frontendIcons.edges,
      image: data.frontendImage.childImageSharp,
      title: serviceTexts.specific.frontend.title,
      description: serviceTexts.specific.frontend.description,
      left: true,
    },

    {
      name: serviceTexts.specific.fullstack.title,
      image: data.fullstackImage.childImageSharp,
      title: serviceTexts.specific.fullstack.title,
      description: serviceTexts.specific.fullstack.description,
      left: true,
    },
    {
      name: serviceTexts.specific.maintenance.title,
      image: data.maintenanceImage.childImageSharp,
      title: serviceTexts.specific.maintenance.title,
      description: serviceTexts.specific.maintenance.description,
      left: true,
    },
    {
      name: serviceTexts.specific.webDesign.title,
      image: data.webDesignImage.childImageSharp,
      title: serviceTexts.specific.webDesign.title,
      description: serviceTexts.specific.webDesign.description,
      left: true,
    },
  ];
  return (
    <ServicesView
      servicesCardsData={servicesCardsData}
      buttonContent={buttonContent}
      firstTitle={firstTitle}
      secondTitle={secondTitle}
      thirdTitle={thirdTitle}
    />
  );
};

export default Services;
