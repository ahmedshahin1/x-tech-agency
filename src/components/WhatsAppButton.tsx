import { WHATSAPP_LINK } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-elevated animate-pulse-ring transition-transform hover:scale-110"
      style={{ boxShadow: "var(--shadow-elevated)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
