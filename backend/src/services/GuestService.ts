"use server";

import type {
  GuestCreateInput,
  GuestUpdateInput,
  GuestWhereUniqueInput,
} from "../../generated/prisma/models.ts";

import { prisma } from "../config/config.ts";

class GuestService {
  async index() {
    return await prisma.guest.findMany();
  }

  async create(data: GuestCreateInput) {
    const found = await prisma.guest.findFirst({
      where: { name: data.name },
    });

    if (found) {
      throw new Error("O convidado já confirmou sua presença.");
    }

    return await prisma.guest.create({
      data: { name: data.name, confirmed: true },
    });
  }

  async read(where: GuestWhereUniqueInput) {
    return await prisma.guest.findUnique({ where });
  }

  async update(data: GuestUpdateInput, where: GuestWhereUniqueInput) {
    return await prisma.guest.update({ data, where });
  }

  async delete(where: GuestWhereUniqueInput) {
    return await prisma.guest.delete({ where });
  }
}

export default new GuestService();
