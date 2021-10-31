import * as React from "react";
// @ts-ignore
import * as styles from "./deepBlueButton.module.css"

export const DeepBlueButton = (props: { buttonContent: string }) => {
    return <button className={styles.button40} role="button">{props.buttonContent}</button>;
}