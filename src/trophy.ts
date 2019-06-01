import { TrophyType } from "src/storage/entity/Trophy";

export interface AddTrophyRequest {
  plateNumber: string;
  msg: string;
  trophyType: TrophyType;
  photos: string[];
}


export const getValidAddTrophyRequest = (reqBody: any): AddTrophyRequest => {
  return {
    plateNumber: reqBody.plateNumber,
    msg: reqBody.msg,
    trophyType: reqBody.trophyType,
    photos: reqBody.photos,
  };
};
