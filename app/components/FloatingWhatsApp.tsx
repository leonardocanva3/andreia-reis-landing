import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/app/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-stone-900/20 transition hover:bg-[#1fb85a] focus:outline-none focus:ring-2 focus:ring-[#9CAF97] focus:ring-offset-2"
    >
      <FaWhatsapp size={31} aria-hidden="true" />
    </a>
  );
}
