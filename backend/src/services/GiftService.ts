"use server";

import type {
  GiftCreateInput,
  GiftUpdateInput,
  GiftWhereUniqueInput,
} from "../../generated/prisma/models.ts";

import { prisma } from "../config/config.ts";

class GiftService {
  async index() {
    try {
      return await prisma.gift.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async create(data: GiftCreateInput) {
    try {
      return await prisma.gift.create({ data });
    } catch (error) {
      console.log(error);
    }
  }

  async read(where: GiftWhereUniqueInput) {
    try {
      return await prisma.gift.findUnique({ where });
    } catch (error) {
      console.log(error);
    }
  }

  async update(data: GiftUpdateInput, where: GiftWhereUniqueInput) {
    try {
      return await prisma.gift.update({ data, where });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(where: GiftWhereUniqueInput) {
    try {
      return await prisma.gift.delete({ where });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GiftService();
