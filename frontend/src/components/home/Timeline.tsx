import { events } from "../../config/geral";

export default function Timeline() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-sky-800 mb-16">
            Programação
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[21px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-primary-200"></div>

            {/* Events */}
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } mb-12 last:mb-0`}
              >
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-ml-[21px] w-[42px] h-[42px] rounded-full bg-white shadow-lg border-4 border-primary-100 flex items-center justify-center z-10">
                  {event.icon}
                </div>

                {/* Empty space for left side (on mobile, it's always to the right) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content */}
                <div className="pl-16 md:pl-0 md:w-1/2 md:px-6">
                  <div
                    className={`bg-white p-4 rounded-lg shadow-lg ${
                      index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="font-semibold text-lg text-sky-700 mb-1">
                      {event.time}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
