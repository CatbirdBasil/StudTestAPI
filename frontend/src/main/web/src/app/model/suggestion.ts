import {City} from "@models/city";
import {Service} from "@models/service";
import {Discount} from "@models/discount";

export interface Suggestion {
  id: number;
  name: string;
  type: string;
  status: string;
  approverId?: number;
  providerId: number;
  location: City;
  // locationCountry: Country;
  numberOfPeople: number;
  price: number;
  description?: string;
  services: Service[]
  discount: Discount
  oneWay: boolean;
}






