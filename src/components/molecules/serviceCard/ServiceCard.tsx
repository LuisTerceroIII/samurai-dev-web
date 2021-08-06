import * as React from "react";
import ServiceCardView from "./ServiceCardView";
import ServiceCardProps from "./types/ServiceCardProps";

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  title,
  description,
  image,
  icons
}) => {
  return (
    <ServiceCardView
      description={description}
      icons={icons}
      image={image}
      name={name}
      title={title}
    />
  );
};

export default ServiceCard;
