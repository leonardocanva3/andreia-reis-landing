import Image from "next/image";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.84fr_1fr]">
        <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-[#f8faf7] shadow-[0_24px_60px_rgba(89,109,85,0.12)]">
          <Image
            src="/images/office.png"
            alt="Ambiente de atendimento acolhedor"
            width={1080}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="aspect-[5/4] h-full w-full object-cover object-center"
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="section-kicker">Agendamento</p>
          <h2 className="section-title mt-3">
            Você não precisa atravessar esse momento sem apoio.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 lg:mx-0">
            Entre em contato para agendar um atendimento ou tirar dúvidas sobre
            psicoterapia e avaliação neuropsicológica. O primeiro passo pode ser
            simples, respeitoso e acolhedor.
          </p>
          <div className="mt-9">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
