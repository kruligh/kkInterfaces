import { GetResponseCar, GetResponseTrophy } from './common';

export interface GetMyAccountResponse {
  login: string;
  nick: string;
  photo: string;
  isActive: boolean;
  trophies: GetResponseTrophy[];
  cars: GetResponseCar[];
}
