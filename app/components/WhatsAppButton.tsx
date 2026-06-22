import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/app/data/site";

type WhatsAppButtonProps = {
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function WhatsAppButton({
  label = "Agendar pelo WhatsApp",
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#9CAF97] focus:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-[#596d55] text-white shadow-sm hover:bg-[#485b45]"
      : "border border-[#9CAF97] text-[#485b45] hover:bg-[#f1f5ef]";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      aria-label={label}
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  );
}
