const groups: Array<{
  label: string
  items: readonly string[]
  emphasized?: boolean
  strikethrough?: boolean
}> = [
  {
    label: "// linguagens",
    items: [
      "Python",
      "Rust",
      "TS/JS",
      "Java",
      "FastAPI",
      "Next.js",
      "Spring Boot",
    ],
    emphasized: true,
  },
  {
    label: "// llm / nlp",
    items: [
      "LangChain / LlamaIndex",
      "LangGraph",
      "Ollama",
      "spaCy",
      "Sentence Transformers",
      "pgvector",
      "Qdrant",
      "HuggingFace",
    ],
  },
  {
    label: "// infra / govtech",
    items: [
      "Kubernetes",
      "Terraform",
      "SERPRO APIs",
      "Gov.br OAuth",
      "LGPD compliance",
      "Elasticsearch",
    ],
  },
  {
    label: "// segurança",
    items: [
      "Metasploit",
      "Burp Suite",
      "SET",
      "Maltego",
      "GoPhish",
      "Nmap",
      "OWASP",
      "threat modeling",
    ],
  },
  {
    label: "// não uso mais / nunca usaria em produção crítica",
    items: [
      "Wordpress",
      "low-code",
      "sprints de 1 semana em sistema de saúde",
    ],
    strikethrough: true,
  },
]

export function Stack() {
  return (
    <section className="px-4 pt-8 pb-12 md:px-0 md:pt-12 md:pb-16">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted-foreground md:mb-6 md:text-[14px]">
        stack
      </p>

      <div className="space-y-7 md:space-y-9">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-mono text-[13px] tracking-tight text-muted-foreground md:mb-3 md:text-[15px]">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[13px] md:px-3 md:py-1.5 md:text-[15px] ${
                    group.strikethrough
                      ? "border-border bg-background text-muted-foreground/50 line-through"
                      : group.emphasized
                        ? "border-border/60 bg-muted text-foreground"
                        : "border-border bg-background text-foreground"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
