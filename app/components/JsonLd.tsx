import { faqs, services, whatsappDisplay, whatsappUrl } from "@/app/data/site";

const siteUrl = "https://andreiareis.com.br";

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andreia Reis",
    jobTitle: "Psicóloga e Neuropsicóloga",
    image: `${siteUrl}/images/hero.png`,
    url: siteUrl,
    telephone: whatsappDisplay,
    sameAs: ["https://m.instagram.com/andreiareis.neuropsi/"],
  };

  const psychologist = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Andreia Reis Psicóloga Neuropsicóloga",
    image: `${siteUrl}/images/logo.png`,
    url: siteUrl,
    telephone: whatsappDisplay,
    priceRange: "$$",
    medicalSpecialty: ["Psychology", "Neuropsychology"],
    description:
      "Psicoterapia para crianças, adolescentes e adultos, avaliação neuropsicológica e acolhimento em saúde mental.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Agendamento",
      telephone: whatsappDisplay,
      url: whatsappUrl,
      availableLanguage: "Portuguese",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Atendimentos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(psychologist) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(faq) }}
      />
    </>
  );
}
