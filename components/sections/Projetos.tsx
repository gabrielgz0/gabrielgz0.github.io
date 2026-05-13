const projects = [
  {
    title: "PFinder",
    status: "produção",
    statusClass:
      "border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-300",
    desc: "Projeto que automatiza parte do setor de licitações com integrações com dados públicos como PNCP e reduziu montagem de processos de meses para minutos!",
    tags: ["python", "dados abertos", "automação", "govtech"],
  },
  {
    title: "RAG sobre Diário Oficial",
    status: "produção",
    statusClass:
      "border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-300",
    desc: "Pipeline de extração, chunking e indexação vetorial de publicações do DOU. Permite consulta semântica a contratos, portarias e licitações. Reduz tempo de busca de ~40min para segundos. Rodando em órgão federal.",
    tags: ["python", "qdrant", "llama3", "fastapi"],
  },
  {
    title: "Extrator NLP — processos jurídicos",
    status: "produção",
    statusClass:
      "border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-300",
    desc: "Identificação e extração de entidades em petições e decisões judiciais (partes, datas, valores, tipificações). Treinado em corpus brasileiro com fine-tuning de BERTimbau. Integrado ao sistema de gestão do tribunal.",
    tags: ["BERTimbau", "spaCy", "NER", "postgresql"],
  },
  {
    title: "Auditoria automatizada de contratos",
    status: "em desenvolvimento",
    statusClass:
      "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300",
    desc: "Sistema de checklist automatizado para contratos públicos — verifica conformidade com Lei 14.133, identifica cláusulas ausentes, sinaliza valores atípicos por categoria/região via análise histórica do Portal da Transparência.",
    tags: ["RAG", "análise estatística", "dados abertos"],
  },
]

export function Projetos() {
  return (
    <section className="px-4 pt-8 pb-12 md:px-0 md:pt-12 md:pb-16">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted-foreground md:mb-6 md:text-[14px]">
        projetos
      </p>

      <div className="space-y-3 md:space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-border p-4 transition-colors hover:border-border/80 md:p-6"
          >
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-sans text-[16px] font-medium md:text-[20px]">
                {project.title}
              </h3>
              <span
                className={`inline-flex shrink-0 self-start rounded-sm border px-2 py-0.5 font-mono text-[12px] md:px-2.5 md:py-1 md:text-[14px] ${project.statusClass}`}
              >
                {project.status}
              </span>
            </div>
            <p className="mb-2 font-sans text-[15px] leading-[1.7] text-muted-foreground md:mb-3 md:text-[17px]">
              {project.desc}
            </p>
            <div className="flex flex-wrap items-center gap-x-1 font-mono text-[12px] text-muted-foreground md:text-[14px]">
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && <span className="mx-1">·</span>}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
