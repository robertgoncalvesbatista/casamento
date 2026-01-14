import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { ShoppingBag } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useWedding } from "../../context/Wedding/wedding.hook";

import {
  ReserveGiftValidation,
  ReserveGiftValidator,
} from "../../validators/ReserveGift";

import GiftService from "../../services/GiftService";
import GuestService from "../../services/GuestService";

import Alert from "../ui/Alerts/Alert";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Modal, { ModalRef } from "../ui/Modal";

type TAlert = {
  type: "error" | "success" | "warning";
  message: string;
};

export default function GiftList() {
  const { gifts, setGifts } = useWedding();

  const modalReservarPresenteRef = useRef<ModalRef>(null);

  const [alert, setAlert] = useState<TAlert>();
  const [selectedGift, setSelectedGift] = useState<number>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReserveGiftValidator>({
    resolver: zodResolver(ReserveGiftValidation),
  });

  const onSubmit = async (data: ReserveGiftValidator) => {
    try {
      if (!selectedGift) {
        throw new Error("Selecione um presente");
      }

      const responseGuest = await GuestService.index({
        params: { email: data.email?.trim() },
      });

      // Caso não exista um convidado, cria um
      if (responseGuest.data.length === 0) {
        await GuestService.create({
          name: data.nome.trim(),
          email: (data.email ?? "").trim(),
          telephone: (data.telefone ?? "").replace(/\D/g, "").trim(),
          confirmed: true,
          giftId: selectedGift,
        });
      } else {
        await GuestService.update(
          { giftId: selectedGift },
          { params: { email: data.email?.trim() } }
        );
      }

      await GiftService.update(
        { reserved: true },
        { params: { id: selectedGift } }
      );

      setAlert({
        type: "success",
        message: "Presente reservado com sucesso!",
      });

      setGifts((prev) => {
        return prev.map((gift) => {
          if (Number(gift.id) === selectedGift) {
            return { ...gift, reserved: true };
          }

          return gift;
        });
      });

      modalReservarPresenteRef.current?.close();
    } catch (error: any) {
      setAlert({
        type: "error",
        message: error.message || "Ocorreu um erro ao reservar o presente.",
      });
    } finally {
      reset({});
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
    <div>
      {!!alert && <Alert message={alert.message} type={alert.type} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gifts.map((gift) => {
          return (
            <Card
              key={gift.id}
              className="h-full flex flex-col border border-gray-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    window.open(
                      gift.link,
                      "_blank",
                      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                    );
                  }}
                />

                {gift.reserved && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-full text-sky-700 font-medium">
                      Presente reservado
                    </div>
                  </div>
                )}
              </div>

              <Card.Body className="flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {gift.name}
                </h3>

                <p className="text-gray-600 mb-2 text-sm flex-grow">
                  {gift.description}
                </p>

                <div className="text-sky-700 font-medium mb-4">
                  R$ {parseFloat(gift.price).toFixed(2)}
                </div>

                <Button
                  variant="primary"
                  fullWidth
                  disabled={gift.reserved}
                  className={
                    gift.reserved ? "bg-gray-400 cursor-not-allowed" : ""
                  }
                  onClick={() => {
                    setSelectedGift(Number(gift.id));
                    modalReservarPresenteRef.current?.open();
                  }}
                >
                  {!!gift.reserved && "Reservado"}

                  {!gift.reserved && (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Reservar presente
                    </>
                  )}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* Modal para reservar presente */}
      <Modal ref={modalReservarPresenteRef}>
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Reservar presente
          </h3>

          <p className="text-gray-600 mb-4">
            Para reservar o presente, por favor informe os seus dados abaixo.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-2">
              <Input
                fullWidth
                name="nome"
                label="Nome"
                placeholder="John Doe"
                register={register}
                error={errors.nome?.message}
              />

              <Input
                fullWidth
                name="email"
                label="Email"
                placeholder="johndoe@gmail.com"
                register={register}
                error={errors.email?.message || errors.contatos?.message}
              />

              <Input
                fullWidth
                name="telefone"
                label="Telefone"
                placeholder="+55 (00) 00000-0000"
                register={register}
                error={errors.telefone?.message || errors.contatos?.message}
              />
            </div>

            <div className="flex justify-end">
              <Button
                className="mr-2"
                variant="outline"
                onClick={() => {
                  modalReservarPresenteRef.current?.close();
                  setSelectedGift(undefined);
                }}
              >
                Cancelar
              </Button>

              <Button variant="primary" type="submit">
                Reservar
              </Button>
            </div>
          </form>

          <div className="pt-4 border-t mt-4">
            <p className="text-gray-600 text-sm flex-grow max-w-xl m-auto">
              Se você precisar ajustar sua presença ou mudar o presente, é só
              entrar em contato conosco. Pedimos a gentileza de nos avisar com
              pelo menos um mês de antecedência da data do casamento.
            </p>
          </div>
        </>
      </Modal>
    </div>
  );
}
