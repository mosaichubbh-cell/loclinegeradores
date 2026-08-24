import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "A Loc-Line", href: "#a-locline" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Liderança", href: "#lideranca" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-ink-foreground">
            LOC<span className="text-primary">-</span>LINE
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-ink-muted sm:block">
            Geradores
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs uppercase tracking-[0.16em] text-ink-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+5531975165434"
            className="flex items-center gap-2 font-display text-sm tracking-wide text-ink-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            (31) 97516-5434
          </a>
          <a
            href="#contato"
            className="bg-primary px-5 py-2.5 font-display text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar proposta
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-ink-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 font-display text-sm uppercase tracking-[0.16em] text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-primary px-5 py-3 text-center font-display text-xs uppercase tracking-[0.16em] text-primary-foreground"
          >
            Solicitar proposta
          </a>
        </div>
      )}
    </header>
  );
}
