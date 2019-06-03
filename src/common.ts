export interface GetResponseTrophy {
  id: string;
  msg: string;
  thumb: GetResponsePhoto;
}

export interface GetResponseDriver {
  id: string;
  nick: string;
  avatar: GetResponsePhoto;
}

export type GetResponsePhoto = {
  id: string;
} | {
  url: string;
};

export interface GetResponseCar {
  plateNumber: string;
  thumb: GetResponsePhoto;
}
