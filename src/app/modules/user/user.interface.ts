import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  imgUrl: string;
  role: string;
  password: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
