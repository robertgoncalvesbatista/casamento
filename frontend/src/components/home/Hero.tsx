import { Link } from "react-router-dom";

import Photo from "../../assets/img/talking.png";
import { initialWeddingDetails } from "../../config/geral";

import Button from "../ui/Button";
import ScrollDown from "../ui/ScrollDown";

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Photo})`,
          filter: "brightness(0.8)",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <ScrollDown positionY={90} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-xl md:text-2xl mb-4 font-serif italic animate-fadeIn">
            Estamos nos casando
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fadeIn animation-delay-200">
            {initialWeddingDetails.coupleName}
          </h1>

          <div className="h-[1px] w-32 mx-auto bg-white opacity-60 mb-6 animate-fadeIn animation-delay-400"></div>

          <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-600">
            {initialWeddingDetails.date} • {initialWeddingDetails.venue}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-800">
            <Link to="/confirmar-presenca">
              <Button
                variant="primary"
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 min-w-[160px]"
              >
                Confirmar Presença
              </Button>
            </Link>

            <Link to="/presentes">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 min-w-[160px]"
              >
                Lista de Presentes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
