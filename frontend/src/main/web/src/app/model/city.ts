import {Country} from "@models/country";

export interface City {
  id: number;
  countryId?: string;
  name: string;
  coordinateId?: number;
  coordinate: Coordinates;
  country?: Country
}
