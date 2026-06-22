import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-[#f8faf7] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-[0_24px_60px_rgba(89,109,85,0.14)]">
          <Image
            src="/images/about.png"
            alt="Andreia Reis em seu consultório"
            width={1080}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/5] h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <p className="section-kicker">Sobre mim</p>
          <h2 className="section-title mt-3">Cuidado clínico com escuta, técnica e presença.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-stone-600">
            <p>
              Sou Andreia Reis, Psicóloga e Neuropsicóloga, CRP 03/28018. Meu
              trabalho é voltado ao acolhimento de crianças, adolescentes e
              adultos, respeitando a singularidade de cada história e a forma
              como cada pessoa expressa seu sofrimento.
            </p>
            <p>
              Na clínica, a escuta psicológica e a avaliação neuropsicológica
              se unem para compreender emoções, comportamento, aprendizagem,
              atenção, memória e desenvolvimento. O objetivo é oferecer clareza
              e cuidado para que famílias e pacientes encontrem caminhos mais
              seguros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
