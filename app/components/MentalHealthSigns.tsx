import Image from "next/image";
import { signs } from "@/app/data/site";

export function MentalHealthSigns() {
  return (
    <section id="sinais" className="bg-[#2d332b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_0.72fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#cbd8c8]">
              Sinais de atenção
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Sua saúde mental precisa ser cuidada antes de chegar ao limite.
            </h2>
          </div>
          <div className="overflow-hidden rounded-[8px] border border-white/12 bg-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/work.png"
              alt="Andreia Reis em atendimento online"
              width={1080}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="aspect-[16/10] h-full w-full object-cover object-[52%_45%]"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {signs.map((sign) => {
            const Icon = sign.icon;
            return (
              <article
                key={sign.title}
                className="rounded-[8px] border border-white/14 bg-white/[0.06] p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#596d55]">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7">
                  {sign.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/76">
                  {sign.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
