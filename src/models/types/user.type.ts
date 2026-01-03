import { z } from "zod";
import {
  createUserSchema,
  updateUserSchema,
  UserApiResponseSchema,
  userSchema,
} from "../schemas/users.schema";
export type UserType = z.infer<typeof userSchema>;
export type UserApiResponse = z.infer<typeof UserApiResponseSchema>;
export type createUserType = z.infer<typeof createUserSchema>;
export type updateUserType = z.infer<typeof updateUserSchema>;
