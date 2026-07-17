import Image from "next/image";
import { Camera, MessageCircle } from "lucide-react";
import { whatsappDisplay, whatsappUrl } from "@/app/data/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f8faf7] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Andreia Reis Psicóloga Neuropsicóloga"
            width={96}
            height={54}
            className="h-12 w-auto object-contain"
          />
          <div>
            <p className="font-semibold text-stone-900">Andreia Reis</p>
            <p className="text-sm text-stone-600">Psicóloga e Neuropsicóloga | CRP 03/28018</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-stone-700">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#596d55]"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp: {whatsappDisplay}
          </a>
          <a
            href="https://m.instagram.com/andreiareis.neuropsi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#596d55]"
          >
            <Camera size={17} aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 px-5 text-center text-[11px] leading-relaxed text-stone-400 sm:text-xs">
        Site e SEO Google feito por:{" "}
        <a
          href="https://www.oleonardomachado.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#596d55]"
        >
          www.oleonardomachado.com.br
        </a>
      </p>
    </footer>
  );
}
