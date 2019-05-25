import {Suggestion} from "./suggestion";
import {User} from "@models/user";
import {City} from "@models/city";
import {Discount} from "@models/discount";

export class Trip {
  id: number;
  name: string;
  type: string;
  status: string;
  approverId?: number;
  providerId: number;
  location: City;
  destination?: City;
  numberOfPeople: number;
  price: number;
  description?: string;
  imgSrc?: string;
  oneWay: boolean;
  suggestions: Suggestion[];

  provider: User;
  discount: Discount;

  locationCity: string;
  destinationCity: string;

  public constructor(init?: Partial<Trip>) {
    Object.assign(this, init);
  }
}
