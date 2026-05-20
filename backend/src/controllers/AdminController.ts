import type { NextFunction, Request, Response } from "express";

import AdminService from "../services/AdminService.ts";

interface LoginRequest {
  email: string;
  password: string;
}

type AdminResponse<T = any> = Response<{
  statusCode: number;
  data?: T;
  message?: string;
}>;

class AdminController {
  async login(
    req: Request<{}, {}, LoginRequest>,
    res: AdminResponse,
    _next: NextFunction
  ) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          statusCode: 400,
          message: "Email e senha são obrigatórios",
        });
      }

      const result = await AdminService.login(email, password);

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        statusCode: 401,
        message: error.message || "Erro ao fazer login",
      });
    }
  }
}

export default new AdminController();
