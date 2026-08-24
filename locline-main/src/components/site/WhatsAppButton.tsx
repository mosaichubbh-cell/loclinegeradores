import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531975165434"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-black/25 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </a>
  );
}
