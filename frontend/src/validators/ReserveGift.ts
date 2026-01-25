import * as zod from "zod";

export const ReserveGiftValidation = zod
  .object({
    nome: zod.string({
      message: "Nome é obrigatório",
    }),
  });

export type ReserveGiftValidator = zod.infer<typeof ReserveGiftValidation>;
