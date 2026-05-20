"use server";

import type {
  GiftCreateInput,
  GiftUpdateInput,
  GiftWhereUniqueInput,
} from "../../generated/prisma/models.ts";

import { prisma } from "../config/config.ts";

class GiftService {
  async index() {
    return await prisma.gift.findMany();
  }

  async create(data: GiftCreateInput) {
    return await prisma.gift.create({ data });
  }

  async read(where: GiftWhereUniqueInput) {
    return await prisma.gift.findUnique({ where });
  }

  async update(data: GiftUpdateInput, where: GiftWhereUniqueInput) {
    return await prisma.gift.update({ data, where });
  }

  async delete(where: GiftWhereUniqueInput) {
    return await prisma.gift.delete({ where });
  }
}

export default new GiftService();
