import type { NextFunction, Request, Response } from "express";

import type { Guest } from "../../generated/prisma/client.ts";
import guestService from "../services/GuestService.ts";

type GuestResponse<T = any> = Response<{
  statusCode: number;
  data: T;
}>;

class GuestController {
  async index(_req: Request, res: GuestResponse<Guest[]>, _next: NextFunction) {
    const data = await guestService.index();

    res.status(200).json({ statusCode: 200, data: data ?? [] });
  }

  async read(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    const data = await guestService.read(where);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async create(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction
  ) {
    const data = await guestService.create(req.body);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async update(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    const data = await guestService.update(req.body, where);

    res.status(200).json({ statusCode: 200, data: data ?? null });
  }

  async delete(
    req: Request,
    res: GuestResponse<{ message: string }>,
    _next: NextFunction
  ) {
    const where = { id: Number(req.params.id) };
    await guestService.delete(where);

    res.status(200).json({
      statusCode: 200,
      data: {
        message: "Deletado com sucesso!",
      },
    });
  }
}

export default new GuestController();
