import * as React from "react";
import IconProps from "./types/IconProps";

const Icon : React.FC<IconProps> = ({ src, cssClass }) : JSX.Element => {
  return <img src={src} className={cssClass} />;
};

export default Icon;
