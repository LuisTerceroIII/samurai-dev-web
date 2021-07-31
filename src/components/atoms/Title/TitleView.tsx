import * as React from 'react';
import TitleProps from "./types/TitleProps";

const TitleView: React.FC<TitleProps> = ({ content, cssClass }): JSX.Element => {
    return <h2 className={cssClass}>{content}</h2>
};

export default TitleView;