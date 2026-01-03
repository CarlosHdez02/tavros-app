import { z } from "zod";
import { roleSchema } from "./users.schema";
export const sortSchema = z.enum(["asc", "desc"]);
export const sortBySchema = z.enum(["name", "email", "created_at"]);
export const queryParamsSchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional(),
  sort: sortSchema.optional(),
  sortBy: sortBySchema.optional(),
  offset: z.coerce.number().int().positive().optional(),
  role: roleSchema.optional(),
  search: z.string().optional(),
});
