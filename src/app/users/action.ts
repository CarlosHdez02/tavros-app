"use server";

import {
  createUserSchema,
  updateUserSchema,
} from "@/models/schemas/users.schema";
import { queryParamsSchema } from "@/models/schemas/query-params.schema";
import UserService from "@/services/users.service";

const usersService = new UserService();

export async function getUsersAction(input: unknown) {
  const queryParams = queryParamsSchema.parse(input);
  return usersService.getAllUsers(queryParams);
}

export async function getUserByIdAction(id: string) {
  return usersService.getUserById(id);
}

export async function createUserAction(input: unknown) {
  const data = createUserSchema.parse(input);
  return usersService.createUser(data);
}

export async function updateUserAction(id: string, input: unknown) {
  const data = updateUserSchema.parse(input);
  return usersService.updateUser(id, data);
}

export async function deactivateUserAction(id: string) {
  return usersService.deactivateUser(id);
}
