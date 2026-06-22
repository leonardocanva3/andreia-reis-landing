import Image from "next/image";
import { Award, MapPin } from "lucide-react";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr_0.9fr] lg:py-10">
        <div>
          <p className="section-kicker">Psicóloga e Neuropsicóloga</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.02] text-stone-900 sm:text-6xl lg:text-7xl">
            Andreia Reis
          </h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-stone-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f1f5ef] px-4 py-2">
              <Award size={16} aria-hidden="true" /> CRP 03/28018
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff5f2] px-4 py-2">
              <MapPin size={16} aria-hidden="true" /> Atendimento acolhedor
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Um espaço de escuta profissional para compreender emoções,
            comportamentos e caminhos de cuidado. Psicoterapia para crianças,
            adolescentes e adultos, com avaliação neuropsicológica quando a
            investigação do desenvolvimento e das funções cognitivas é
            necessária.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a
              href="#servicos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 px-5 text-sm font-semibold text-stone-800 transition hover:border-[#9CAF97] hover:bg-[#f8faf7]"
            >
              Conhecer atendimentos
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-x-10 bottom-2 h-32 rounded-full bg-[#9CAF97]/20 blur-3xl" />
          <div className="absolute inset-6 rounded-full bg-[#f1f5ef]" />
          <Image
            src="/images/hero.png"
            alt="Andreia Reis, psicóloga e neuropsicóloga"
            width={1080}
            height={1080}
            preload
            sizes="(max-width: 1024px) 92vw, 520px"
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_24px_42px_rgba(89,109,85,0.16)]"
          />
        </div>
      </div>
    </section>
  );
}
