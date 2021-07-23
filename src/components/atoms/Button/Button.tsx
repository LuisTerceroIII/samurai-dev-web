import * as React from "react"
import ButtonView from "./ButtonView";
import ButtonProps from "./types/ButtonProps";

const Button: React.FC<ButtonProps> = ({ cssClass, onClick, value, disable }): JSX.Element => {
    return (
        <ButtonView cssClass={cssClass} onClick={onClick} value={value} disable={disable} />
    );
};

export default Button;