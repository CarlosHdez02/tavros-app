import { z } from "zod";

export const genderSchema = z.enum(["M", "F"]);
export const roleSchema = z.enum(["client", "coach", "admin"]);
export const userSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string(),
  email_verfied: z.date().optional(),
  image: z.string().optional(),
  role: roleSchema,
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  celllphone: z.string().optional(),
  gender: genderSchema,
  date_of_birth: z.date(),
  created_at: z.date(),
  updated_at: z.date(),
  is_active: z.boolean(),
});

export const UserApiResponseSchema = z.object({
  totalPages: z.number(),
  currentPage: z.number(),
  totalItems: z.number(),
  itemsPerPage: z.number(),
  data: userSchema.array(),
  message: z.string(),
});

export const createUserSchema = userSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export const updateUserSchema = createUserSchema.partial();
