import {UserDetails} from "./user.details";

export interface User {
  id: number;
  authorityId: number;
  email: string;
  username: string;
  password: string;
  authority: string;
  details: UserDetails;
  token?: string;

  // firstName?: string;
  // secondName?: string;
  // role?: string;
  // registrationDate?: string;
  // imgSrc?: string
}
