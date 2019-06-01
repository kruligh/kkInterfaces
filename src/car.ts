import { GetResponseDriver, GetResponsePhoto, GetResponseTrophy } from "./interfaces";

export interface GetCarProfileResponse {
  plateNumber: string;
  brand?: string;
  model?: string;
  color?: string;
  photos: GetResponsePhoto[];
  trophies: GetResponseTrophy[];
  drivers: GetResponseDriver[];
}
