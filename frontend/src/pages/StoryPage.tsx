import Layout from "../components/layout/Layout";

import BancoLavandario from "../assets/img/banco-lavandario.jpeg";
import ColheitaMorangos from "../assets/img/colheita-morangos.jpeg";
import Coracao from "../assets/img/coracao.jpeg";
import Lavandario from "../assets/img/lavandario.jpeg";
import Photo from "../assets/img/photo.jpeg";

import { initialWeddingDetails } from "../config/geral";

export default function StoryPage() {
  return (
    <Layout>
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-serif text-center text-sky-800 mb-12"
              id="nossa-historia"
            >
              Nossa História
            </h1>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-8">
                <img
                  src={Photo}
                  alt="Casal apaixonado"
                  className="w-72 h-[250px] object-cover rounded-lg float-left mr-4"
                />

                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    {initialWeddingDetails.story}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    Estamos noivos! E mal podemos esperar para começar a nossa
                    vida juntos com Deus. Em breve celebraremos esse momento tão
                    especial com vocês!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <img
                  src={Lavandario}
                  alt="Lavandário"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <img
                  src={BancoLavandario}
                  alt="Banco no lavandário"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <img
                  src={ColheitaMorangos}
                  alt="Colheita de morangos"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>

              <div className="mb-8">
                <img
                  src={Coracao}
                  alt="Momentos do casal"
                  className="w-72 h-[250px] object-cover rounded-lg float-right ml-4"
                />

                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    Em um passeio inesquecível a Domingos Martins, nossa jornada
                    ganhou um novo e belo significado. Desfrutamos da colheita
                    de morangos e nos perdemos na beleza do lavandário, com seus
                    campos roxos e perfume adocicado. Foi debaixo de uma árvore,
                    com a natureza como nossa testemunha, que fiz a pergunta que
                    mudaria nossas vidas para sempre.
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    O 'sim' dela fez daquele momento a memória mais linda que
                    levaremos para sempre. Agora, com o coração cheio de
                    alegria, compartilhamos o nosso noivado e em breve
                    celebraremos essa jornada!
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-xl md:text-2xl font-serif text-sky-700">
                  {initialWeddingDetails.coupleName}
                </p>
                <p className="text-gray-500">{initialWeddingDetails.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
