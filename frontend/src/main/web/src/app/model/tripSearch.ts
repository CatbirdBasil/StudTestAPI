export interface SearchTrip {
  locationCountry: string;
  destinationCountry: string;
  numberOfPeople: number;
  priceFrom: number;
  priceTo: number;
}

export interface SearchTripMultiple {
  locationCountry: Country;
  destinationCountry: Country[];
  numberOfPeople: number;
  priceFrom: number;
  priceTo: number;
}

export interface Country {
  id: number;
  name: string;
}

