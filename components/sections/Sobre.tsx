export function Sobre() {
  return (
    <section className="px-4 pt-8 pb-12 md:px-0 md:pt-12 md:pb-16">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted-foreground md:mb-6 md:text-[14px]">
        sobre
      </p>

      <div className="mb-8 grid grid-cols-1 gap-3 md:mb-9 md:grid-cols-2 md:gap-4">
        <div className="rounded-lg border border-border bg-muted/40 p-4 md:p-6">
          <h3 className="mb-2 font-mono text-[14px] font-medium md:mb-3 md:text-[16px]">
            // o que faço
          </h3>
          <p className="font-sans text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
            Construo sistemas onde{" "}
            <strong className="font-semibold text-foreground">
              o custo do erro é alto
            </strong>
            : integração com APIs, pipelines de NLP em documentos complexos,
            automação de processos que antes dependiam de planilha Excel e boa
            vontade.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/40 p-4 md:p-6">
          <h3 className="mb-2 font-mono text-[14px] font-medium md:mb-3 md:text-[16px]">
            // como penso
          </h3>
          <p className="font-sans text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
            Naturalismo lógico. Resultados têm causa. Complexidade não é
            desculpa.{" "}
            <strong className="font-semibold text-foreground">
              Todo sistema legado foi código novo um dia
            </strong>{" "}
            — a pergunta é: quem vai manter isso daqui a 5 anos?
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/40 p-4 md:p-6">
          <h3 className="mb-2 font-mono text-[14px] font-medium md:mb-3 md:text-[16px]">
            // mercado
          </h3>
          <p className="font-sans text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
            Govtech é um mercado com{" "}
            <strong className="font-semibold text-foreground">
              barreira de entrada alta e competição baixa
            </strong>
            . Quem entende de burocracia + código tem vantagem competitiva
            real. Não é altruísmo. É nicho.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/40 p-4 md:p-6">
          <h3 className="mb-2 font-mono text-[14px] font-medium md:mb-3 md:text-[16px]">
            // underground
          </h3>
          <p className="font-sans text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
            Listo CVEs, leio RFCs, contribuo em projetos sem PR aberto.{" "}
            <strong className="font-semibold text-foreground">
              Segurança não é feature
            </strong>
            , é ausência de buraco.{" "}
            O código porco feito em PHP + Windows Server em 2004 com cursinho
            da Oracle?{" "}
            <strong className="font-semibold text-foreground">
              Hoje é minha fonte de renda.
            </strong>
          </p>
        </div>
      </div>

      <div className="space-y-5 md:space-y-6">
        <p className="font-sans text-[15px] leading-[1.9] text-muted-foreground md:text-[18px]">
          Não tenho interesse em{" "}
          <strong className="font-semibold text-foreground">
            palestrar sobre transformação digital
          </strong>
          . Tenho interesse em entregar sistemas que sobrevivem a mudança de
           governo, troca de fornecedor e corte de orçamento.
        </p>
        <p className="font-sans text-[15px] leading-[1.9] text-muted-foreground md:text-[18px]">
          LLMs são ferramentas. Poderosas, barulhentas, úteis quando você sabe
          o que quer.{" "}
          <strong className="font-semibold text-foreground">
            RAG bem feito em cima de dados estruturados
          </strong>{" "}
          entrega mais valor real do que qualquer dashboard bonito.
        </p>
        <p className="font-sans text-[15px] leading-[1.9] text-muted-foreground md:text-[18px]">
          O LinkedIn vai continuar existindo. Este site é pra quem quer ver o
          código.
        </p>
      </div>
    </section>
  )
}
