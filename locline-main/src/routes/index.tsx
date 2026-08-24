import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Zap,
  Factory,
  Radio,
  MoveVertical,
  Wrench,
  Phone,
  Mail,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

import heroGeradorAsset from "@/assets/hero-gerador.png.asset.json";
import equipeEngenhariaAsset from "@/assets/equipe-engenharia.png.asset.json";
import plataformaTesoura from "@/assets/plataforma-tesoura.jpg";
import plataformaArticuladaAsset from "@/assets/plataforma-articulada-3.jpeg.asset.json";
import usinaCampo from "@/assets/usina-campo.jpg";
import mtEngenharia from "@/assets/mt-engenharia.jpg";
import zecaAsset from "@/assets/zeca.jpeg.asset.json";
import marcusAsset from "@/assets/marcus.jpeg.asset.json";
import cemigAsset from "@/assets/cemig.jpg.asset.json";
import mineiraoAsset from "@/assets/mineirao.jpg.asset.json";
import arenaMrvAsset from "@/assets/arena-mrv.jpg.asset.json";
import globoMinasAsset from "@/assets/globo-minas.jpg.asset.json";


const heroGerador = heroGeradorAsset.url;
const equipeEngenharia = equipeEngenhariaAsset.url;
const plataformaArticulada = plataformaArticuladaAsset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOC-LINE Geradores | Locação de geradores e usinas de energia" },
      {
        name: "description",
        content:
          "Locação de grupos geradores, usinas de energia em baixa e média tensão, engenharia elétrica e operação 24h x 7 em MG, RJ e SP. Desde 2009.",
      },
      { property: "og:title", content: "LOC-LINE Geradores | Energia para operações críticas" },
      {
        property: "og:description",
        content:
          "Grupos geradores de 50 kVA a 5 MVA, usinas móveis em média tensão, plataformas elevatórias e engenharia NR-10. Atendimento emergencial 24h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "2009", label: "Desde" },
  { value: "24/7", label: "Atendimento" },
  { value: "NR-10", label: "Equipe" },
  { value: "5 MVA", label: "Potência" },
];

const solucoes = [
  {
    n: "01",
    icon: Zap,
    title: "Geração de energia",
    text: "Locação de grupos geradores de 50 kVA a 5 MVA em baixa e média tensão, com paralelismo, sincronismo e operação assistida.",
    items: ["Grupos geradores BT e MT", "Paralelismo e sincronismo", "Energia por assinatura"],
  },
  {
    n: "02",
    icon: Factory,
    title: "Usinas e infraestrutura",
    text: "Usinas móveis de energia, eletrocentros, cabines primárias e toda a infraestrutura elétrica da operação.",
    items: ["Usinas móveis em MT 13,8 kV", "Eletrocentros e cabines", "Interligação de cabos"],
  },
  {
    n: "03",
    icon: Radio,
    title: "Tecnologia e monitoramento",
    text: "Telemetria, supervisório e leitura remota de consumo, com relatórios técnicos e indicadores de disponibilidade.",
    items: ["Telemetria em tempo real", "Supervisório e alarmes", "Relatórios de operação"],
  },
  {
    n: "04",
    icon: MoveVertical,
    title: "Trabalho em altura",
    text: "Plataformas elevatórias tesoura e articuladas para manutenção industrial, montagem e obras com equipe NR-35.",
    items: ["Plataformas tesoura elétricas", "Plataformas articuladas", "Operadores treinados NR-35"],
  },
  {
    n: "05",
    icon: Wrench,
    title: "Engenharia e suporte",
    text: "Projetos, laudos, estudos de viabilidade e manutenção preventiva e corretiva com atendimento emergencial 24h.",
    items: ["Projetos e laudos elétricos", "Manutenção preventiva", "Emergência 24h x 7"],
  },
];

const equipamentos = [
  {
    n: "1",
    title: "Grupos geradores",
    image: heroGerador,
    text: "Unidades silenciadas de 50 kVA a 5 MVA, em BT e MT, prontas para operação contínua.",
    items: ["50 kVA a 5 MVA", "Cabine silenciada — 75 dB a 1,5 m", "Tanque para operação contínua", "Paralelismo automático"],
  },
  {
    n: "2",
    title: "Plataforma tesoura elétrica",
    image: plataformaTesoura,
    text: "Elevação vertical para manutenção industrial em pisos planos, com operação limpa e silenciosa.",
    items: ["Altura de trabalho até 14 m", "Tração elétrica sem emissão", "Ideal para ambientes internos", "Capacidade até 320 kg"],
  },
  {
    n: "3",
    title: "Plataforma articulada aérea",
    image: plataformaArticulada,
    text: "Alcance horizontal e vertical para acessos difíceis em obras, indústria e eventos.",
    items: ["Altura de trabalho até 20 m", "Alcance horizontal ampliado", "Tração 4x4 para terrenos", "Operadores NR-35"],
  },
];

const mtItems = [
  "Cabines primárias e secundárias",
  "Laudos e projetos de SPDA",
  "Estudos de viabilidade",
  "Subestações e eletrocentros",
  "Interligação em MT 13,8 kV",
  "Adequações e comissionamento",
];

const projetos = [
  {
    tag: "Média tensão / Concessionárias",
    title: "Usina de energia — 12,3 MW",
    text: "Usina de energia de 12,3 MW entregue e operada para concessionária.",
    local: "Rio de Janeiro",
    image: usinaCampo,
  },
  {
    tag: "Média tensão / Concessionárias",
    title: "Usina móvel — 4,8 MVA",
    text: "Usina móvel de energia em média tensão para concessionária de energia.",
    local: "São Paulo",
    image: mtEngenharia,
  },
  {
    tag: "Média tensão / Concessionárias",
    title: "Usina móvel — 2 MVA em MT 13,8 kV",
    text: "Usina móvel de 2 MVA em média tensão com interligação completa de cabos.",
    local: "Belo Horizonte",
    image: equipeEngenharia,
  },
  {
    tag: "Offshore / Concessionárias",
    title: "31 e 50 grupos geradores — 24h x 7",
    text: "Operação em baixa tensão com 31 geradores na fase 1 e 50 na fase 2, em regime contínuo.",
    local: "Brasil",
    image: heroGerador,
  },
];

const clientes = [
  { name: "CEMIG", logo: cemigAsset.url },
  { name: "Mineirão", logo: mineiraoAsset.url },
  { name: "Arena MRV", logo: arenaMrvAsset.url },
  { name: "Rede Globo Minas", logo: globoMinasAsset.url },
];


const diretores = [
  {
    nome: "Zeca Teixeira da Costa",
    cargo: "Diretor de Relações Institucionais",
    image: zecaAsset.url,
    resumo:
      "Engenheiro e jornalista, com trajetória consolidada em mídia, gestão e transformação digital.",
    bio: [
      "Executivo com trajetória consolidada em mídia, gestão e transformação digital. Engenheiro e jornalista, com formação pela PUC Minas e especialização pela Fundação Dom Cabral. Foi Diretor Executivo do Estado de Minas, Presidente da TV Alterosa e fundador do Portal Uai. Atualmente, além de Diretor de Relações Institucionais da Loc Line, atua na expansão de soluções de Inteligência Artificial para negócios, conectando estratégia, inovação, tecnologia e mercado.",
    ],
  },
  {
    nome: "Marcus Carvalho",
    cargo: "Diretor de Expansão",
    image: marcusAsset.url,
    resumo:
      "Mais de 20 anos em mineração, indústria, operações e desenvolvimento de negócios.",
    bio: [
      "Executivo e consultor com mais de 20 anos de experiência em mineração, indústria, operações e desenvolvimento de negócios, com trajetória construída do chão de fábrica à liderança executiva.",
      "Foi Diretor Executivo em empresas de mineração e indústria e atuou na liderança de marketing e negócios em grupos de comunicação e publicidade. Atualmente é Diretor de Expansão da Locline, além de atuar na estruturação de negócios, projetos estratégicos e aplicação de Inteligência Artificial aos negócios.",
    ],
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative isolate min-h-[78vh] overflow-hidden bg-ink sm:min-h-[92vh]">
          <img
            src={heroGerador}
            alt="Grupo gerador LOC-LINE instalado em operação urbana ao entardecer"
            width={1400}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-70 sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/70 to-ink/90 sm:bg-gradient-to-r sm:from-ink sm:via-ink/85 sm:to-ink/25" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:min-h-[92vh] sm:pb-20 sm:pt-36">

            <span className="eyebrow">Locação de geradores · MG · RJ · SP</span>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.08] text-ink-foreground sm:text-6xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.04]">
              Energia para operações que não podem parar.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Holding em soluções de energia desde 2009: grupos geradores de 50 kVA a 5 MVA,
              usinas móveis em média tensão, engenharia elétrica e operação assistida 24h x 7.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Preciso de um equipamento <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-display text-xs uppercase tracking-[0.18em] text-ink-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Ver projetos realizados
              </a>
            </div>
          </div>
        </section>

        {/* A LOC-LINE */}
        <section id="a-locline" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">A Loc-Line</span>
            <div className="mt-6 grid gap-14 lg:grid-cols-2 lg:items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Soluções completas para operações que exigem energia, engenharia e
                confiabilidade.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Atuamos desde 2009 na locação de grupos geradores e na execução de usinas de
                  energia em baixa e média tensão para concessionárias, indústria, mineração,
                  grandes eventos, comércio e infraestrutura.
                </p>
                <p>
                  Estrutura própria de logística, equipe técnica certificada NR-10 e NR-35 e
                  engenharia dedicada ao dimensionamento de cada operação — do estudo de
                  viabilidade à energização e ao acompanhamento em campo.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <img
                src={equipeEngenharia}
                alt="Técnicos LOC-LINE analisando projeto elétrico em frente a subestação"
                width={1200}
                height={1000}
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
              <dl className="grid grid-cols-2 gap-px bg-border">
                {stats.map((s) => (
                  <div key={s.label} className="rule-top bg-card px-6 py-10">
                    <dt className="font-display text-4xl text-foreground">{s.value}</dt>
                    <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">Soluções</span>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Soluções para operações críticas
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solucoes.map((s) => (
                <article key={s.n} className="rule-top bg-card p-8">
                  <div className="flex items-start justify-between">
                    <s.icon className="h-9 w-9 text-primary" />
                    <span className="font-display text-3xl text-muted-foreground/40">{s.n}</span>
                  </div>
                  <h3 className="mt-7 text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <div className="flex flex-col justify-between bg-ink p-8 text-ink-foreground">
                <h3 className="text-2xl">Precisa de uma análise técnica da sua operação?</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Nossa engenharia dimensiona a solução em BT ou MT a partir dos dados da sua
                  carga, prazo e local de instalação.
                </p>
                <a
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-4 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground"
                >
                  Falar com a engenharia <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPAMENTOS */}
        <section id="equipamentos" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">Equipamentos</span>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Frota e equipamentos para locação
            </h2>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {equipamentos.map((e) => (
                <article key={e.n} className="flex flex-col border border-border bg-card">
                  <div className="relative">
                    <img
                      src={e.image}
                      alt={e.title}
                      width={1000}
                      height={800}
                      loading="lazy"
                      className="h-56 w-full object-cover"
                    />
                    <span className="absolute left-0 top-0 bg-primary px-4 py-2 font-display text-sm text-primary-foreground">
                      {e.n}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl">{e.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                    <ul className="mt-6 space-y-2">
                      {e.items.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contato"
                      className="mt-8 inline-flex items-center justify-center gap-2 border border-foreground/15 px-5 py-3 font-display text-xs uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                    >
                      Solicitar proposta
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MT ENGENHARIA */}
        <section className="bg-surface py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
            <img
              src={mtEngenharia}
              alt="Eletricista executando serviço em cabine de média tensão"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-[460px] w-full object-cover"
            />
            <div>
              <span className="eyebrow">Engenharia elétrica</span>
              <h2 className="mt-5 text-3xl sm:text-4xl">MT — engenharia e média tensão</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Projeto, execução e comissionamento de infraestrutura elétrica em média tensão,
                com responsabilidade técnica e documentação completa.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {mtItems.map((i) => (
                  <li key={i} className="flex gap-3 bg-card px-4 py-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">Projetos</span>
            <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
              Projetos e operações entregues em campo
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {projetos.map((p) => (
                <article key={p.title} className="group relative isolate overflow-hidden bg-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-80 w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="eyebrow">{p.tag}</span>
                    <h3 className="mt-3 text-2xl text-ink-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
                    <span className="mt-3 block font-display text-xs uppercase tracking-[0.2em] text-ink-foreground/70">
                      {p.local}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">Clientes e parceiros</span>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {clientes.map((c) => (
                <div
                  key={c.name}
                  className="flex h-28 items-center justify-center bg-card px-8"
                >
                  <img
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    loading="lazy"
                    className="max-h-14 w-auto max-w-[180px] object-contain"
                  />
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-ink py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="eyebrow">Atendimento emergencial em MT 24h</span>
              <h2 className="mt-4 max-w-2xl text-3xl text-ink-foreground sm:text-4xl">
                Sua operação não pode parar. A nossa engenharia também não.
              </h2>
            </div>
            <a
              href="https://wa.me/5531975165434"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-primary px-7 py-4 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground"
            >
              Falar pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* LIDERANÇA */}
        <section id="lideranca" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-5">
            <span className="eyebrow">Liderança</span>
            <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
              Diretoria próxima da operação e do cliente
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Interlocução direta com quem decide, do relacionamento institucional à expansão das
              operações.
            </p>

            <div className="mt-14 max-w-5xl space-y-16">
              {diretores.map((d, i) => (
                <article
                  key={d.nome}
                  className={`grid items-center gap-8 sm:grid-cols-2 ${i % 2 === 1 ? "sm:[&>figure]:order-2" : ""}`}
                >
                  <figure className="m-0">
                    <img
                      src={d.image}
                      alt={`${d.nome} — ${d.cargo} da LOC-LINE`}
                      width={800}
                      height={900}
                      loading="lazy"
                      className="mx-auto aspect-[4/5] w-full max-w-sm object-cover object-center"
                    />
                  </figure>
                  <div>
                    <span className="eyebrow">{d.cargo}</span>
                    <h3 className="mt-3 text-2xl sm:text-3xl">{d.nome}</h3>
                    <p className="mt-4 text-base leading-relaxed text-foreground/90">{d.resumo}</p>
                    {d.bio.map((p) => (
                      <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-surface py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Contato</span>
              <h2 className="mt-5 text-3xl sm:text-4xl">
                Vamos dimensionar a sua operação de energia
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Envie os dados da operação e nossa engenharia retorna com a solução adequada em BT
                ou MT.
              </p>

              <div className="mt-10 space-y-px bg-border">
                <a
                  href="tel:+5531975165434"
                  className="flex items-center gap-4 bg-card px-6 py-5 transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Telefone / WhatsApp
                    </span>
                    <span className="font-display text-lg">(31) 97516-5434</span>
                  </span>
                </a>
                <a
                  href="mailto:expansao@locline.com.br"
                  className="flex items-center gap-4 bg-card px-6 py-5 transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      E-mail
                    </span>
                    <span className="font-display text-lg">expansao@locline.com.br</span>
                  </span>
                </a>
              </div>
            </div>

            <form
              className="bg-card p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const corpo = [
                  `Nome: ${data.get("nome")}`,
                  `Empresa: ${data.get("empresa")}`,
                  `Telefone: ${data.get("telefone")}`,
                  `Solução: ${data.get("solucao")}`,
                  "",
                  String(data.get("mensagem") ?? ""),
                ].join("\n");
                window.location.href = `mailto:expansao@locline.com.br?subject=${encodeURIComponent(
                  "Solicitação de proposta — site LOC-LINE",
                )}&body=${encodeURIComponent(corpo)}`;
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Nome
                  <input
                    name="nome"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                  />
                </label>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Empresa
                  <input
                    name="empresa"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                  />
                </label>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                  />
                </label>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Telefone
                  <input
                    name="telefone"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                  />
                </label>
              </div>

              <label className="mt-5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Tipo de solução
                <select
                  name="solucao"
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                >
                  <option>Grupos geradores</option>
                  <option>Usina de energia em BT</option>
                  <option>Usina de energia em MT</option>
                  <option>Usina móvel</option>
                  <option>Energia para eventos</option>
                  <option>Energia por assinatura</option>
                  <option>Infraestrutura elétrica / MT</option>
                  <option>Plataformas elevatórias</option>
                  <option>Telemetria e supervisório</option>
                  <option>Outro</option>
                </select>
              </label>

              <label className="mt-5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Descrição da operação
                <textarea
                  name="mensagem"
                  rows={5}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="mt-7 w-full bg-primary px-6 py-4 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar solicitação
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
