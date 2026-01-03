import { prisma } from "@/lib/prisma";
import { QueryParamsType } from "@/models/types/query-params.type";
import { createUserType, updateUserType } from "@/models/types/user.type";

export default class UserService {
  async getAllUsers(queryParams: QueryParamsType) {
    const page = queryParams.page ?? 1;
    const limit = queryParams.limit ?? 10;
    const sortBy = queryParams.sortBy ?? "created_at";
    const sort = queryParams.sort ?? "desc";
    const offset = (page - 1) * limit;

    const [users, totalItems] = await Promise.all([
      prisma.user.findMany({
        take: limit,
        skip: offset,
        orderBy: { [sortBy]: sort },
      }),
      prisma.user.count(),
    ]);

    return {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      itemsPerPage: limit,
      data: users,
    };
  }

  async getUserById(id: string) {
    try {
      const user = await prisma.user.findFirst({ where: { id } });
      if (!id) {
        throw new Error(`User with id ${id} not found`);
      }
      return user;
    } catch (err: unknown) {
      console.error(`error getting user by id ${id}`);
    }
  }

  async createUser(data: createUserType) {
    try {
      const newUser = await prisma.user.create({ data });
      return newUser;
    } catch (err: unknown) {
      console.error(`err at creating user`);
    }
  }

  async updateUser(id: string, data: updateUserType) {
    await this.getUserById(id);
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async deactivateUser(id: string) {
    await this.getUserById(id);
    return prisma.user.update({
      where: { id },
      data: { is_active: false },
    });
  }
}
