import * as React from "react"
import Landing from "../sections/Landing/Landing";
import Header from "../layouts/header/Header";
import AboutMe from "../sections/AboutMe/AboutMe";
//TODO: Compartir varibales css desde un archivo.
const IndexPage = () : JSX.Element => {
  return (
      <>
          <Header>
              <Landing/>
          </Header>
      </>
  )
}

export default IndexPage
