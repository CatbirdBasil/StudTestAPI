import {Trip} from "@models/trip";

export interface Discount {
  id: number;
  serviceId: number;
  startDate: number;
  endDate: number;
  type: string;
  amount: number;
  service: Trip;

  serviceName: string;
}
