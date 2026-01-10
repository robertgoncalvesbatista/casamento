import * as zod from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const telefoneRegex = /^(\+55\s?)?(\(?\d{2}\)?[\s-]?)?9?\d{4}[\s-]?\d{4}$/;

export const ReserveGiftValidation = zod
  .object({
    nome: zod.string({
      message: "Nome é obrigatório",
    }),
    email: zod
      .string()
      .regex(emailRegex, { message: "O email informado deve ser válido" })
      .optional()
      .or(zod.literal("")),
    telefone: zod
      .string()
      .regex(telefoneRegex, { message: "O telefone informado deve ser válido" })
      .optional()
      .or(zod.literal("")),
  })
  .check(
    zod.refine((data) => !!data.email || !!data.telefone, {
      message: "É obrigatório informar algum meio de contato",
      path: ["contatos"],
    })
  );

export type ReserveGiftValidator = zod.infer<typeof ReserveGiftValidation>;
