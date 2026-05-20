import * as zod from "zod";

export const GiftFormValidation = zod.object({
  name: zod.string({ message: "Nome é obrigatório" }).min(1, "Nome é obrigatório"),
  description: zod
    .string({ message: "Descrição é obrigatória" })
    .min(1, "Descrição é obrigatória"),
  price: zod
    .string()
    .or(zod.number())
    .pipe(
      zod
        .number()
        .positive("Preço deve ser maior que 0")
    ),
  image: zod.string({ message: "Imagem é obrigatória" }).url("Imagem deve ser uma URL válida"),
  link: zod.string({ message: "Link é obrigatório" }).url("Link deve ser uma URL válida"),
});

export type GiftFormValidator = zod.infer<typeof GiftFormValidation>;
