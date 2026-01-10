import GiftList from "../components/gifts/GiftList";
import Layout from "../components/layout/Layout";

import QRcode from "../assets/img/qrcode.png";

export default function GiftsPage() {
  return (
    <Layout>
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-center text-sky-800 mb-6">
              Lista de Presentes
            </h1>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Sua presença no nosso casamento já é um presente! Mas se você
              deseja nos presentear, selecionamos alguns itens que nos ajudarão
              a começar nossa vida juntos.
            </p>

            <GiftList />

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-2 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-9">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Um PIXzinho...
                </h1>

                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                  Se você preferir nos ajudar com um PIX, qualquer valor será de
                  grande ajuda e ficaremos muito gratos! O mais importante, no
                  entanto, é ter você celebrando conosco. Que Deus te abençoe.
                </p>

                <a
                  href="https://nubank.com.br/cobrar/1nawmc/68ae3696-d520-4871-95a9-1f3d6d2a22b5"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-800 hover:bg-purple-600"
                >
                  Fazer transferência PIX
                </a>
              </div>

              <div className="hidden lg:mt-0 lg:col-span-3 lg:flex bg-purple-800 p-8 rounded-md">
                <img
                  src={QRcode}
                  alt="QRcode PIX de presente em valor"
                  className="bg-white rounded-sm p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
