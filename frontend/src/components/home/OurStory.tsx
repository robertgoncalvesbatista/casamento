import { Link } from "react-router-dom";

import BancoLavandario from "../../assets/img/banco-lavandario.jpeg";
import Coracao from "../../assets/img/coracao.jpeg";
import Lavandario from "../../assets/img/lavandario.jpeg";
import Photo from "../../assets/img/photo.jpeg";

import { initialWeddingDetails } from "../../config/geral";

import Button from "../ui/Button";

export default function OurStory() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-sky-800 mb-6">
              Nossa História
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {initialWeddingDetails.story}
            </p>

            <Link to="/nossa-historia">
              <Button
                variant="outline"
                className="border-sky-600 text-sky-600"
              >
                Ler mais
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-6">
            <div className="col-span-2">
              <div className="grid grid-cols-4 gap-2">
                <img
                  src={BancoLavandario}
                  alt="Banco no lavandário"
                  className="w-full h-auto rounded-lg shadow-lg col-span-4"
                />

                <img
                  src={Coracao}
                  alt="Coração"
                  className="w-full h-auto rounded-lg shadow-lg col-span-2"
                />

                <img
                  src={Photo}
                  alt="Beijo do casal"
                  className="w-full h-auto rounded-lg shadow-lg col-span-2"
                />
              </div>
            </div>

            <img
              src={Lavandario}
              alt="Casal apaixonado"
              className="w-full h-auto rounded-lg shadow-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}