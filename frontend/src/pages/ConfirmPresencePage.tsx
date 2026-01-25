import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  ReserveGiftValidation,
  ReserveGiftValidator,
} from "../validators/ReserveGift";

import Layout from "../components/layout/Layout";
import Alert from "../components/ui/Alerts/Alert";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

import GuestService from "../services/GuestService";

type TAlert = {
  type: "error" | "success" | "warning";
  message: string;
};

export default function ConfirmPresencePage() {
  const navigate = useNavigate();

  const [alert, setAlert] = useState<TAlert>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveGiftValidator>({
    resolver: zodResolver(ReserveGiftValidation),
  });

  const onSubmit = async (data: ReserveGiftValidator) => {
    try {
      const responseGuest = await GuestService.index({
        params: { name: data.nome },
      });

      if (responseGuest.data.length === 0) {
        throw new Error("Esta pessoa não foi convidada ou o nome informado está incorreto.");
      } else {
        if (responseGuest.data[0].confirmed) {
          throw new Error("O convidado já confirmou sua presença.");
        } else {
          await GuestService.update(
            { confirmed: true },
            { params: { id: responseGuest.data[0].id } }
          );

          setAlert({
            type: "success",
            message: "Sua presença foi confirmada com sucesso!",
          });
        }
      }
    } catch (error: any) {
      setAlert({
        type: "error",
        message: error.message || "Ocorreu um erro ao confirmar presença.",
      });
    }
  };

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(undefined);
      }, 5000);
    }
  });

  return (
    <Layout>
      <div
        className="container mx-auto px-4 flex items-center"
        style={{ height: "calc(100vh - 192px)" }}
      >
        <div className="max-w-6xl mx-auto">
          {!!alert && <Alert message={alert.message} type={alert.type} />}

          <Card className="h-full flex flex-col max-w-6xl mx-auto border border-gray-300">
            <Card.Body className="flex-grow flex flex-col">

              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Confirmação de Presença
              </h3>

              <p className="text-gray-600 mb-4 text-sm flex-grow max-w-md">
                Sua presença é muito importante para nós! Por favor, confirme
                sua participação para que possamos preparar tudo com carinho.
                Aguardamos você para celebrar esse momento tão especial ao nosso
                lado! 💍✨
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-2">
                  <Input
                    fullWidth
                    name="nome"
                    label="Nome completo"
                    placeholder="John Doe"
                    register={register}
                    error={errors.nome?.message}
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    className="mr-2"
                    variant="outline"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Cancelar
                  </Button>

                  <Button variant="primary" type="submit">
                    Confirmar presença
                  </Button>
                </div>
              </form>
            </Card.Body>

            <Card.Footer>
              <p className="text-gray-600 text-sm flex-grow max-w-md">
                Se você precisar ajustar sua presença ou mudar o presente, é só
                entrar em contato conosco. Pedimos a gentileza de nos avisar com
                pelo menos um mês de antecedência da data do casamento.
              </p>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
