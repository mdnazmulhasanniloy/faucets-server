import { z } from 'zod';
import { userRole } from './user.constant';

//request validation
//body --> object
//data --> object

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    email: z.string({ required_error: 'Email is required' }).email(),
    role: z.enum([...userRole] as [string, ...string[]], {
      required_error: 'Role is required',
    }),
    imgUrl: z.string().optional(),
    password: z.string({ required_error: 'password is required' }),
  }),
});

export const userValidation = {
  createUserZodSchema,
};
