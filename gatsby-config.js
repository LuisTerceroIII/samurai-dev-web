module.exports = {
  siteMetadata: {
    title: "Samurai dev site",
    navBar: [
      {
        option: "Inicio",
        redirect: "/"
      },
      {
        option: "Sobre mi",
        redirect: "/aboutMe",
      },
      {
        option: "Servicios",
        redirect: "/services",
      },
      {
        option: "Proyectos",
        redirect: "/projects",
      },
      {
        option: "Contacto",
        redirect: "/contact",
      },
    ],
    sections: {
      landing: {
        logo: "../../assets/images/samurailogo.png",
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
        title: {
          content: "Sobre mi",
          cssClass: "",
        },
        paragraph: {
          content:
            "Mi nombre es Luis Espinoza, soy programador especializado en desarrollo web, estudiante de la universidad general sarmiento y emprendedor. Me dedico a crear sitios y aplicaciones web utilizando las mejores tecnologías. Me gusta especialmente trabajar con artistas , emprendedores, profesionales y comercios interesados en acercar su perfil o idea a internet y darse a conocer de una manera única. Mi mayor motivo es acercar la web  y ayudar a los demas a alcanzar sus objetivos. ",
          cssClass: "",
        },
        icon: {
          content: "",
          cssClass: "",
        },
      },
      services: {
        title: "Servicios",
        packsSection: {
          title: "Paquetes",
          servicesData: [
            {
              id: 0,
              name: "Web de Contacto",
              description:
                "WEB CONTACTO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Quis eleifend quam adipiscing vitae proin. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet nulla facilisi morbi tempus iaculis. Nibh ipsum consequat nisl vel pretium lectus quam. At risus viverra adipiscing at in. ",
              active: true,
            },
            {
              id: 1,
              name: "Web de Portfolio",
              description:
                "WEB PORTFOLIO Los sitios estáticos son sitios que no ofrecen servicios al visitante, por ejemplo un portfolio profesional, el sitio de una empresa o negocio, el sitio de una banda y más.\n" +
                "Este tipo de sitios está dirigido a quienes buscan presencia en la web y usan el sitio como medio de contacto ya que su mayor valor es informativo además de proporcionar profesionalismo a tu marca o perfil.\n",
              active: false,
            },
            {
              id: 2,
              name: "Aplicación Web",
              description:
                "APLICACION WEB Los sitios dinámicos son los que ofrecen un servicio al visitante, por ejemplo mercadolibre, youtube, o cualquier tienda online es un sitio dinámico.\n" +
                "Estos tipo de sitios está dirigido para aquellos que desean brindar un servicio por medio de su web, es decir ya no solamente mostrar información sino también poder por ejemplo, vender por la web, registrar a los usuarios interesados en tu servicio, mostrar información específica según el tipo de usuario y mucho más. \n",
              active: false,
            },
          ],
          buttonMessage: "Contacto",
        },
        specific: {
          title: "Específicos",
          backend: {
            title: "Back end",
            description: "Desarrollo de apis y diseño de base de datos.",
          },
          frontend: {
            title: "Front end",
            description:
              "Desarrollo de sitios web estáticos y aplicaciones web.",
          },
          fullstack: {
            title: "Full Stack",
            description:
              "Back-end y front-end juntos para diseñar aplicaciones desde cero.",
          },
          maintenance: {
            title: "Mantenimiento",
            description:
              "Si trabajamos juntos puedo modificar tu proyecto siempre que quieras.",
          },
          webDesign: {
            title: "Diseño web",
            description:
              "Trabajo junto a diseñadores que pueden encargarse de diseñar tu web.",
          },
        },
      },
    },
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backend`,
        path: `${__dirname}/src/assets/images/icons/backend`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `frontend`,
        path: `${__dirname}/src/assets/images/icons/frontend`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/assets/images/icons/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing`,
        path: `${__dirname}/src/assets/images/Landing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Services`,
        path: `${__dirname}/src/assets/images/Services`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Logo`,
        path: `${__dirname}/src/assets/images/Logo`,
      },
    },


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Samurai dev",
        short_name: "SamuraiDev",
        start_url: "/",
        background_color: "#090808",
        theme_color: "#f6f6f6",
        display: "standalone",
        icon: "src/assets/images/Logo/FAVICON_FAVICON COLOR.png",
      },
    },
  ],
};
