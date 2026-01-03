import { z } from "zod";
import { queryParamsSchema } from "../schemas/query-params.schema";
export type QueryParamsType = z.infer<typeof queryParamsSchema>;
