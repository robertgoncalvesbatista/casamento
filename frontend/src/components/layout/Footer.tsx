import { Heart } from "lucide-react";

import { initialWeddingDetails } from "../../config/geral";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-serif text-sky-700 mb-2">
              {initialWeddingDetails.coupleName}
            </h3>
            <p className="text-gray-600 mb-1">{initialWeddingDetails.date}</p>
            <p className="text-gray-600">{initialWeddingDetails.venue}</p>
          </div>

          <div className="flex items-center justify-center text-gray-500 text-sm">
            <span>&copy; {year} • Feito com</span>
            <Heart size={16} className="mx-1 text-red-500 fill-red-500" />
            <span>para o nosso casamento</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
