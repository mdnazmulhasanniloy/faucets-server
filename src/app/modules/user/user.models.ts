import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: { type: 'string', required: true, unique: true },

    email: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true },
    imgUrl: {
      type: 'string',
    },
    role: {
      type: 'string',
      required: true,
      enum: ['admin', 'user'],
    },
    password: {
      type: 'string',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser, UserModel>('User', userSchema);
