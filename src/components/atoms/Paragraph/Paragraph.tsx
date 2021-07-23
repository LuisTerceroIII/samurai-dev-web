import * as React from 'react';
import ParagraphView from "./ParagraphView";
import ParagraphProps from "./types/ParagraphProps";

const Paragraph: React.FC<ParagraphProps> = ({ content, cssClass }): JSX.Element => {
    return <ParagraphView content={content} cssClass={cssClass} />
};

export default Paragraph;