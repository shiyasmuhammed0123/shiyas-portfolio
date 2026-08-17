import { MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(240,29,74,0.5)] hover:scale-105 transition-transform lg:hidden"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}
