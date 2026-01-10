import { Link } from "react-router-dom";

import BancoLavandario from "../../assets/img/banco-lavandario.jpeg";
import { initialWeddingDetails } from "../../config/geral";

import Button from "../ui/Button";

export default function OurStory() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
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

            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={BancoLavandario}
                  alt="Casal apaixonado"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
