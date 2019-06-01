import { GetResponseCar, GetResponseTrophy } from './interfaces';

export interface GetMyAccountResponse {
  login: string;
  nick: string;
  photo: string;
  isActive: boolean;
  trophies: GetResponseTrophy[];
  cars: GetResponseCar[];
}
