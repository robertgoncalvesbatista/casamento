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
    const found = await prisma.guest.findFirst({
      where: { name: data.name },
    });

    if (found) {
      throw new Error("O convidado já confirmou sua presença.");
    }

    return await prisma.guest.create({ data });
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
