"use server";

import type {
  GuestCreateInput,
  GuestUpdateInput,
  GuestWhereUniqueInput,
} from "../../generated/prisma/models.ts";

import { prisma } from "../config/config.ts";

class GuestService {
  async index() {
    try {
      return await prisma.guest.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async create(data: GuestCreateInput) {
    try {
      return await prisma.guest.create({ data });
    } catch (error) {
      console.log(error);
    }
  }

  async read(where: GuestWhereUniqueInput) {
    try {
      return await prisma.guest.findUnique({ where });
    } catch (error) {
      console.log(error);
    }
  }

  async update(data: GuestUpdateInput, where: GuestWhereUniqueInput) {
    try {
      return await prisma.guest.update({ data, where });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(where: GuestWhereUniqueInput) {
    try {
      return await prisma.guest.delete({ where });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GuestService();
