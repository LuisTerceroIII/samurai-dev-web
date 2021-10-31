import Service from "./Service";

export default interface PackServicesProps {
  services: Service[];
  serviceSelected: Service;
  changeService(serve : Service): void;
  arrowsStyles: any;
  viewport: any;
  showParagraph: any;
}
