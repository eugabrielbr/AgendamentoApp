import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export function validateData(schema: ZodSchema<any>) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {

      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Erro de validação",
          errors: (error.issues ?? []).map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      return res.status(500).json({
        message: "Erro interno no validador",
      });
    }
  };
}
