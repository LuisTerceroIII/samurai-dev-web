import * as React from "react"
import Landing from "../sections/Landing/Landing";
import Header from "../layouts/header/Header";
import * as styles from "../assets/css/global.module.css";
//TODO: Compartir varibales css desde un archivo.
const IndexPage = () : JSX.Element => {
  return (
      <div className={styles.global}>
          <Header>
              <Landing/>
          </Header>
      </div>
  )
}

export default IndexPage
