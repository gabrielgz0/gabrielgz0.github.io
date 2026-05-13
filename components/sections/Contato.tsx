import { Code2, Network, Mail, ArrowRight } from "lucide-react"

const links = [
  {
    href: "https://github.com/gabrielgz0",
    icon: Code2,
    label: "github",
    subtitle: "código real, commits reais",
  },
  {
    href: "mailto:gabrielsm.lavras@gmail.com",
    icon: Mail,
    label: "email",
    subtitle: "respondo em dias úteis, sem CRM",
  },
  {
    href: "https://www.linkedin.com/in/gabriel-alves-02502434a/",
    icon: Network,
    label: "linkedin",
    subtitle: "existe, funciona, não é aqui que a conversa começa",
  },
]

export function Contato() {
  return (
    <section className="px-4 pt-8 pb-12 md:px-0 md:pt-12 md:pb-16">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted-foreground md:mb-6 md:text-[14px]">
        contato
      </p>

      <p className="mb-6 max-w-[600px] font-sans text-[15px] leading-[1.8] text-muted-foreground md:mb-8 md:text-[18px]">
        Se você tem um problema real e precisa de{" "}
        <strong className="font-semibold text-foreground">
          solução barata, rápida e otimizada
        </strong>
        ,{" "}
        <strong className="font-semibold text-foreground">fale comigo</strong>.
        Se você quer um freelance de landing page, não sou a pessoa certa. Se
        você quer discutir arquitetura enxuta, automação que corta custos ou
        entrega sem desperdício,{" "}
        <strong className="font-semibold text-foreground">
          provavelmente vai ser uma boa conversa
        </strong>
        .
      </p>

      <div className="space-y-2 md:space-y-3">
        {links.map((link) => {
          const Icon = link.icon
          const isExternal =
            link.href.startsWith("http") || link.href.startsWith("mailto")
          return (
            <a
              key={link.label}
              href={link.href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex cursor-pointer items-center justify-between rounded-md border border-border p-3 transition-colors hover:border-border/80 md:p-5"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-4 text-muted-foreground md:size-5" />
                <div>
                  <p className="font-mono text-[14px] font-medium md:text-[16px]">
                    {link.label}
                  </p>
                  <p className="font-sans text-[13px] text-muted-foreground md:text-[15px]">
                    {link.subtitle}
                  </p>
                </div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground md:size-5" />
            </a>
          )
        })}
      </div>

      <div className="mt-6 border-l-2 border-border pl-4 font-sans text-[13px] leading-[1.7] text-muted-foreground md:mt-10 md:text-[15px]">
        O LinkedIn tem endossos, recomendações e as palavras certas no
        headline. Serve pro ATS, serve pro RH, serve pro gestor que precisa
        justificar a contratação. Tudo bem. Mas se você chegou nessa página,
        você já pulou esse passo.
      </div>
    </section>
  )
}
