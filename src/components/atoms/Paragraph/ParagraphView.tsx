import * as React from 'react';
import ParagraphProps from "./types/ParagraphProps";

const ParagraphView: React.FC<ParagraphProps> = ({ cssClass, content }) => {
    return <p className={cssClass}>{content}</p>
};

export default ParagraphView;