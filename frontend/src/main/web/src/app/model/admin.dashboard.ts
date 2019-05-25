export interface AdminDashboard {
  usersPerYear: UsersPerYear[];
  servicesDistribution: ServicesDistribution[];
  countryTrips: CountryTrips[];
  carriersPerYear: UsersPerYear[];
  costsPerInterval: CostsPerInterval[];
  troubleTicketStatistic: TroubleTicketStatistic[];
}

export interface CostsPerInterval {
  interval: string;
  cost: number;
}

export interface CountryTrips {
  countryName: string;
  amount: number;
}

export interface ServicesDistribution {
  serviceType: string;
  distAmount: number;
}

export interface UsersPerYear {
  year: string;
  usersAmount: number;
}

export interface TroubleTicketStatistic {
  state: string;
  amount: number;
}
