import * as React from 'react';
// @ts-ignore
import * as styles from './styles/Services.module.css';
import Title from "../../components/atoms/Title/Title";
import PackServices from "../../components/molecules/packServices/PackServices";
import Button from "../../components/atoms/Button/Button";

const ServicesView = () => {
    return (
        <section className={styles.grid}>
            <Title cssClass={styles.mainTitle} content={"Servicios"} />
            <Title cssClass={styles.secondTitle} content={"Packs"} />
            <PackServices />
            <Button cssClass={styles.button} value={"Contactame"} disable={false}  onClick={() => console.log("Button packs services")}/>
            <Title cssClass={styles.thirdTitle} content={"Específicos"} />
        </section>
    );
};

export default ServicesView;