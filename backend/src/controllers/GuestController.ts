import type { NextFunction, Request, Response } from "express";

import type { Guest } from "../../generated/prisma/client.ts";
import guestService from "../services/GuestService.ts";

type GuestResponse<T = any> = Response<{
  statusCode: number;
  data?: T;
  message?: string;
}>;

class GuestController {
  async index(_req: Request, res: GuestResponse<Guest[]>, _next: NextFunction) {
    try {
      const data = await guestService.index();

      res.status(200).json({ statusCode: 200, data: data ?? [] });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async read(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      const data = await guestService.read(where);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async create(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction,
  ) {
    try {
      const data = await guestService.create(req.body);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async update(
    req: Request,
    res: GuestResponse<Guest | null>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      const data = await guestService.update(req.body, where);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async delete(
    req: Request,
    res: GuestResponse<{ message: string }>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      await guestService.delete(where);

      res.status(200).json({
        statusCode: 200,
        message: "Deletado com sucesso!",
      });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }
}

export default new GuestController();
