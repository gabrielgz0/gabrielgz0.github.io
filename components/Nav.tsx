"use client"

import { cn } from "@/lib/utils"

const tabs = [
  { id: "home", label: "~/" },
  { id: "sobre", label: "sobre" },
  { id: "stack", label: "stack" },
  { id: "projetos", label: "projetos" },
  { id: "contato", label: "contato" },
] as const

export type TabId = (typeof tabs)[number]["id"]

export function Nav({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}) {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[880px] items-center justify-between gap-2 px-4 py-2.5 md:gap-4 md:px-8 md:py-3">
        <span className="shrink-0 font-mono text-[13px] font-bold text-foreground md:text-[18px]">
          @gabrielgz0
        </span>
        <div className="flex items-center gap-0 md:gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "shrink-0 relative rounded-md bg-transparent px-1 py-1 font-mono text-[11px] transition-colors hover:bg-muted hover:text-foreground md:px-2.5 md:text-[15px]",
                activeTab === tab.id
                  ? "text-foreground after:absolute after:bottom-0 after:left-1 after:right-1 after:h-[1.5px] after:bg-foreground md:after:left-2 md:after:right-2"
                  : "text-muted-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
