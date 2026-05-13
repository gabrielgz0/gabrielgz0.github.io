"use client"

import { Button } from "@/components/ui/button"
import type { TabId } from "@/components/Nav"

export function Home({
  onTabChange,
}: {
  onTabChange: (tab: TabId) => void
}) {
  return (
    <section className="px-4 pt-8 pb-12 md:px-0 md:pt-12 md:pb-16">
      <p className="mb-4 font-mono text-[13px] text-muted-foreground md:mb-6 md:text-[15px]">
        ~ $ whoami → carregando
      </p>

      <h1 className="mb-4 font-sans text-[28px] font-medium leading-[1.25] md:mb-6 md:text-[40px]">
        Sistemas públicos quebrados
        <br />
        <span className="text-muted-foreground">
          são oportunidade, não tragédia.
        </span>
      </h1>

      <p className="mb-6 max-w-[600px] font-sans text-[15px] leading-[1.8] text-muted-foreground md:mb-8 md:text-[18px]">
        Dev focado em{" "}
        <strong className="font-semibold text-foreground">
          sistemas críticos e govtech
        </strong>
        . Trabalho com{" "}
        <strong className="font-semibold text-foreground">
          LLMs aplicadas
        </strong>{" "}
        — RAG, NLP, automação de processos burocráticos. Não acredito em
        manifesto ágil. Acredito em{" "}
        <strong className="font-semibold text-foreground">
          código que funciona em produção
        </strong>{" "}
        com orçamento de órgão público.
      </p>

      <div className="mb-6 flex flex-wrap gap-1.5 md:mb-8 md:gap-2">
        <span className="rounded-sm border border-emerald-300 bg-emerald-50 px-2 py-0.5 font-mono text-[12px] text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 md:px-2.5 md:py-1 md:text-[14px]">
          govtech
        </span>
        <span className="rounded-sm border border-violet-300 bg-violet-50 px-2 py-0.5 font-mono text-[12px] text-violet-800 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-300 md:px-2.5 md:py-1 md:text-[14px]">
          LLM / RAG
        </span>
        <span className="rounded-sm border border-blue-300 bg-blue-50 px-2 py-0.5 font-mono text-[12px] text-blue-800 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-300 md:px-2.5 md:py-1 md:text-[14px]">
          NLP aplicado
        </span>
        <span className="rounded-sm border border-border bg-transparent px-2 py-0.5 font-mono text-[12px] text-muted-foreground md:px-2.5 md:py-1 md:text-[14px]">
          sistemas legados
        </span>
        <span className="rounded-sm border border-border bg-transparent px-2 py-0.5 font-mono text-[12px] text-muted-foreground md:px-2.5 md:py-1 md:text-[14px]">
          sistemas críticos
        </span>
        <span className="rounded-sm border border-border bg-transparent px-2 py-0.5 font-mono text-[12px] text-muted-foreground md:px-2.5 md:py-1 md:text-[14px]">
          hacking ético
        </span>
        <span className="rounded-sm border border-border bg-transparent px-2 py-0.5 font-mono text-[12px] text-muted-foreground md:px-2.5 md:py-1 md:text-[14px]">
          python / rust
        </span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:gap-3">
        <Button
          onClick={() => onTabChange("projetos")}
          className="font-mono text-[13px] md:text-[15px]"
        >
          ver projetos →
        </Button>
        <Button
          onClick={() => onTabChange("contato")}
          variant="outline"
          className="font-mono text-[13px] text-muted-foreground md:text-[15px]"
        >
          contato
        </Button>
      </div>
    </section>
  )
}
