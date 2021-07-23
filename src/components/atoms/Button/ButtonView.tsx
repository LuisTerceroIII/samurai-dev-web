import * as React from 'react';
import ButtonProps from "./types/ButtonProps";

const ButtonView: React.FC<ButtonProps> = ({ cssClass, disable, value, onClick }): JSX.Element => {
    return (
        disable ? <input type={"button"}
            value={value}
            onClick={onClick}
            className={cssClass}
            disabled
        /> : <input type={"button"}
            value={value}
            onClick={onClick}
            className={cssClass}
        />
    );
};

export default ButtonView;