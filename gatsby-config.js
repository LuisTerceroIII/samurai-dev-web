module.exports = {
  siteMetadata: {
    title: "Samurai dev site",
    sections: {
      landing: {
        logo: "../../assets/images/samurailogo.png",
        navOption: ["Sobre mi", "Servicios", "Proyectos", "Contacto"],
        title: {
          content:
            "Hola, bienvenido a mi sitio, soy Luis Espinoza, desarrollador web independiente.",
          cssClass: "",
        },
        paragraph: {
          content: `Si estás en búsqueda de un desarrollador que pueda ayudarte con tus ideas sobre aplicaciones web, sitios web, diseño web, codificación de tus diseños, y más, has llegado al lugar correcto.
En este sitio obtendrás la información necesaria para saber  de qué manera puedo ayudarte para traer vida a tus ideas.`,
          cssClass: "",
        },
        button: {
          value: "Conoceme",
          cssClass: "",
          disable: false,
          onClick: "",
        },
      },
      aboutMe: {
          title : {
            content : "Sobre mi",
            cssClass : ""

          },
          paragraph: {
            content : "Mi nombre es Luis Espinoza, soy programador especializado en desarrollo web, estudiante de la universidad general sarmiento y emprendedor. Me dedico a crear sitios y aplicaciones web utilizando las mejores tecnologías. Me gusta especialmente trabajar con artistas , emprendedores, profesionales y comercios interesados en acercar su perfil o idea a internet y darse a conocer de una manera única. Mi mayor motivo es acercar la web  y ayudar a los demas a alcanzar sus objetivos. ",
            cssClass : ""
          },
          icon : {
            content : "",
            cssClass : ""
          }
      },
      services : {
        packsSection : {
          title : "Packs",
          servicesData: [
            {
              id: 1,
              name: "Web de Contacto",
              description : "WEB CONTACTO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Quis eleifend quam adipiscing vitae proin. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet nulla facilisi morbi tempus iaculis. Nibh ipsum consequat nisl vel pretium lectus quam. At risus viverra adipiscing at in. "
            },
            {
              id: 2,
              name: "Web de Portfolio",
              description : "WEB PORTFOLIO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Quis eleifend quam adipiscing vitae proin. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet nulla facilisi morbi tempus iaculis. Nibh ipsum consequat nisl vel pretium lectus quam. At risus viverra adipiscing at in. "
            },
            {
              id: 3,
              name: "Aplicacion Web",
              description : "APLICACION WEB Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Quis eleifend quam adipiscing vitae proin. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet nulla facilisi morbi tempus iaculis. Nibh ipsum consequat nisl vel pretium lectus quam. At risus viverra adipiscing at in. "
            }
          ],
          buttonMessage : "Contacto"
        }
      }
    },
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
