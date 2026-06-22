import { services } from "@/app/data/site";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Como posso te ajudar?</p>
          <h2 className="section-title mt-3">
            Atendimentos para diferentes fases e necessidades.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#9CAF97]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f1f5ef] text-[#596d55]">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7 text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
