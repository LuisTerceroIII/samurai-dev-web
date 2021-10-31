import * as React from "react";
// @ts-ignore
import * as styles from "./creamButton.module.css"

export const CreamButton = ({value}) : JSX.Element =>  {
    return (
        <button className={styles.button30} role="button">
            {value}
        </button>
    )
}