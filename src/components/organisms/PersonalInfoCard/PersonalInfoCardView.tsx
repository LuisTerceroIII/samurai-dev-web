import * as React from "react";
// @ts-ignore
import * as styles from "./styles/personalInfoCard.module.css";
import { StaticImage } from "gatsby-plugin-image";
const PersonalInfoCardView = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.personalInfoBox}>
        <span className={styles.emailBox}>
          <p className={styles.title}>Email : </p>
          <p className={styles.email}>luis.espinoza.nav@live.com</p>
        </span>
        <span className={styles.phoneBox}>
          <p className={styles.title}>Telegram & Whatsapp : </p>
          <p className={styles.phone}>+54 9 11 2388 1314</p>
        </span>
      </div>
      <div className={styles.icons}>
        <a href="mailto:luis.espinoza.nav@live.com">
          <StaticImage
            className={styles.icon}
            src={"../../../assets/images/icons/contact/email.png"}
            alt={"email"}
            width={48}
            heigth={48}
            quality={40}
            objectFit={"contain"}
            placeholder="TRACED_SVG"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-h%C3%A9ctor-espinoza-navarrete-bbb7b3140/"
          target={"__blank"}
        >
          <StaticImage
            className={styles.icon}
            src={"../../../assets/images/icons/contact/linkedin.png"}
            alt={"linkedin"}
            width={48}
            heigth={48}
            quality={40}
            objectFit={"contain"}
            placeholder="TRACED_SVG"
          />
        </a>

        <a href="https://wa.me/5491123881314" target={"__blank"}>
          <StaticImage
            className={styles.icon}
            src={"../../../assets/images/icons/contact/whatsapp.png"}
            alt={"whatsapp"}
            width={48}
            heigth={48}
            quality={40}
            objectFit={"contain"}
            placeholder="TRACED_SVG"
          />
        </a>

        <a href="https://telegram.me/luisterceroiii" target={"__blank"}>
          <StaticImage
              className={styles.icon}
              src={"../../../assets/images/icons/contact/telegrama.png"}
              alt={"telegram"}
              width={48}
              heigth={48}
              quality={40}
              objectFit={"contain"}
              placeholder="TRACED_SVG"
          />
        </a>
      </div>

    </div>
  );
};

export default PersonalInfoCardView;
