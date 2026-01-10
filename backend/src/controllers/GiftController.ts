import type { NextFunction, Request, Response } from "express";

import type { Gift } from "../../generated/prisma/client.ts";
import GiftService from "../services/GiftService.ts";

type GiftResponse<T = any> = Response<{
  statusCode: number;
  data: T;
}>;

class GiftController {
  async index(_req: Request, res: GiftResponse<Gift[]>, _next: NextFunction) {
    const data = await GiftService.index();

    res.status(200).json({ statusCode: 200, data: data ?? [] });
  }

  async read(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    const data = await GiftService.read(where);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async create(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction
  ) {
    const data = await GiftService.create(req.body);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async update(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    const data = await GiftService.update(req.body, where);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async delete(
    req: Request,
    res: GiftResponse<{ message: string }>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    await GiftService.delete(where);

    res.status(200).json({
      statusCode: 200,
      data: {
        message: "Deletado com sucesso!",
      },
    });
  }
}

export default new GiftController();
