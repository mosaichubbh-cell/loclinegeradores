import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "A Loc-Line", href: "#a-locline" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Liderança", href: "#lideranca" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl font-bold">
            LOC<span className="text-primary">-</span>LINE
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Holding em soluções de energia desde 2009. Locação de grupos geradores, usinas em
            baixa e média tensão, engenharia elétrica e operação assistida 24h x 7 em MG, RJ e SP.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-primary">Navegação</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-display text-sm uppercase tracking-[0.12em] text-ink-foreground/80 transition-colors hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-primary">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:expansao@locline.com.br" className="hover:text-ink-foreground">
                expansao@locline.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+5531975165434" className="hover:text-ink-foreground">
                (31) 97516-5434
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              Belo Horizonte / MG — atuação em MG, RJ e SP
            </li>
          </ul>
          <a
            href="https://wa.me/5531975165434"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-xs uppercase tracking-[0.16em] text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} LOC-LINE Geradores. Todos os direitos reservados.</span>
          <span className="uppercase tracking-[0.2em]">Equipe NR-10 · NR-35 · Atendimento 24h</span>
        </div>
      </div>
    </footer>
  );
}
