import Service from "./Service";

export default interface PackServicesProps {
  services: Service[];
  serviceSelected: Service;
  changeService(id: number): void;
  arrowsStyles: any;
}
