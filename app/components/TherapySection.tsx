import Image from "next/image";

type Therapy = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  lead: string;
  paragraphs: string[];
};

export function TherapySection({
  therapy,
  index,
}: {
  therapy: Therapy;
  index: number;
}) {
  const imageFirst = index % 2 === 1;

  return (
    <section id={therapy.id} className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className={imageFirst ? "lg:order-2" : ""}>
          <p className="section-kicker">{therapy.eyebrow}</p>
          <h2 className="section-title mt-3">{therapy.title}</h2>
          <p className="mt-7 text-lg leading-8 text-stone-700">{therapy.lead}</p>
          <div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
            {therapy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={imageFirst ? "lg:order-1" : ""}>
          <div className="overflow-hidden rounded-[8px] border border-stone-200 bg-[#f8faf7] shadow-[0_22px_50px_rgba(89,109,85,0.12)]">
            <Image
              src={therapy.image}
              alt={therapy.imageAlt}
              width={1080}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[5/4] h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
