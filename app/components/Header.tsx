import Image from "next/image";
import { navItems } from "@/app/data/site";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Andreia Reis">
          <Image
            src="/images/logo.png"
            alt="Andreia Reis Psicóloga Neuropsicóloga"
            width={128}
            height={72}
            preload
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav
          className="hidden items-center gap-5 text-sm font-medium text-stone-600 lg:flex"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#596d55]">
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton label="WhatsApp" className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
