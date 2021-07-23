import * as React from 'react';
import TitleProps from "./types/TitleProps";

const TitleView: React.FC<TitleProps> = ({ content, cssClass }): JSX.Element => {
    return <h1 className={cssClass}>{content}</h1>
};

export default TitleView;