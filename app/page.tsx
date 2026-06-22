import { AboutSection } from "@/app/components/AboutSection";
import { FinalCta } from "@/app/components/FinalCta";
import { FloatingWhatsApp } from "@/app/components/FloatingWhatsApp";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { JsonLd } from "@/app/components/JsonLd";
import { MentalHealthSigns } from "@/app/components/MentalHealthSigns";
import { ServicesSection } from "@/app/components/ServicesSection";
import { TherapySection } from "@/app/components/TherapySection";
import { faqs, therapies } from "@/app/data/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        {therapies.map((therapy, index) => (
          <TherapySection key={therapy.id} therapy={therapy} index={index} />
        ))}
        <MentalHealthSigns />
        <section
          id="faq"
          className="border-y border-stone-200 bg-[#f8faf7] py-20 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1fr]">
            <div>
              <p className="section-kicker">Dúvidas frequentes</p>
              <h2 className="section-title mt-3">
                Informações para chegar com mais tranquilidade.
              </h2>
            </div>
            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-stone-900">
                    {faq.question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#9CAF97]/50 text-[#596d55] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
