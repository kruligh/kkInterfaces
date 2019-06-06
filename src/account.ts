import { GetResponseCar, GetResponseTrophy, GetResponsePhoto } from './common';

export interface GetMyAccountResponse {
  login: string;
  nick: string;
  photo: GetResponsePhoto;
  isActive: boolean;
  trophies: GetResponseTrophy[];
  cars: GetResponseCar[];
}
