import { CalendarClock, Heart, MapPin } from "lucide-react";

import { initialWeddingDetails } from "../../config/geral";

export default function WeddingInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-sky-800 mb-16">
            Nosso Grande Dia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <CalendarClock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data e Hora
              </h3>
              <p className="text-gray-600">{initialWeddingDetails.date}</p>
              <p className="text-gray-600">A partir das 15:30</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Local
              </h3>
              <p className="text-gray-600">{initialWeddingDetails.venue}</p>
              <p className="text-gray-600">{initialWeddingDetails.address}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary-600 fill-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Celebração
              </h3>
              <p className="text-gray-600">Cerimônia e Recepção</p>
              <p className="text-gray-600">Traje: Esporte Fino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
