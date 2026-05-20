import type { NextFunction, Request, Response } from "express";

import type { Gift } from "../../generated/prisma/client.ts";
import GiftService from "../services/GiftService.ts";

type GiftResponse<T = any> = Response<{
  statusCode: number;
  data?: T;
  message?: string;
}>;

class GiftController {
  async index(_req: Request, res: GiftResponse<Gift[]>, _next: NextFunction) {
    try {
      const data = await GiftService.index();

      res.status(200).json({ statusCode: 200, data: data ?? [] });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async read(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      const data = await GiftService.read(where);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async create(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction,
  ) {
    try {
      const data = await GiftService.create(req.body);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async update(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      const data = await GiftService.update(req.body, where);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async reserve(
    req: Request,
    res: GiftResponse<Gift | null>,
    _next: NextFunction,
  ) {
    try {
      const id = Number(req.params.id);
      const data = await GiftService.reserve(id);

      res.status(200).json({ statusCode: 200, data: data ?? null });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }

  async delete(
    req: Request,
    res: GiftResponse<{ message: string }>,
    _next: NextFunction,
  ) {
    try {
      const where = { id: Number(req.params.id) };
      await GiftService.delete(where);

      res.status(200).json({
        statusCode: 200,
        message: "Deletado com sucesso!",
      });
    } catch (error: any) {
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }
}

export default new GiftController();
