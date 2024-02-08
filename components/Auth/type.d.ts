import { User } from "../User/type";

export type LoginRes = {
  message: string;
  status: number;
  data: User;
  access_token: string;
};

export type RegisterRes = {
  message: string;
};
