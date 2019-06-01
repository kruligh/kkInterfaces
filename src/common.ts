export interface GetResponseTrophy {
  id: string;
  msg: string;
  thumb: string;
}

export interface GetResponseDriver {
  id: string;
  nick: string;
  avatar?: string;
}

export interface GetResponsePhoto {
  id: string;
  url: string;
  thumb: string;
}

export interface GetResponseCar {
  plateNumber: string;
  thumb: string;
}
