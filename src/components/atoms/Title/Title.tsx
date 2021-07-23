import * as React from 'react';
import TitleView from "./TitleView";
import TitleProps from "./types/TitleProps";


const Title: React.FC<TitleProps> = ({ content, cssClass }): JSX.Element => {

    return (
        <TitleView cssClass={cssClass} content={content} />
    );
};

export default Title;