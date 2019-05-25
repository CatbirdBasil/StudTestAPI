import {City} from "@models/city";

export interface Service {
  id: number;
  name: string;
  type: string;
  status: string;
  approverId?: number;
  providerId: string;
  location: City;
  numberOfPeople: number;
  price: number;
  description?: string;
  oneWay: boolean;

  ticketAmount?: Date;
}

/*export interface Service {
  id: number;
  name: string;
  serviceType: string;
  description?: string;
  imgSrc: string;
  numberOfPeople: number;
  country?: string;
  city?: string;
  price: number;

  ticketAmount?: Date;
}*/
