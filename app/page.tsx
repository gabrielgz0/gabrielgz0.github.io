"use client"

import { useState } from "react"
import { Nav, type TabId } from "@/components/Nav"
import { Home } from "@/components/sections/Home"
import { Sobre } from "@/components/sections/Sobre"
import { Stack } from "@/components/sections/Stack"
import { Projetos } from "@/components/sections/Projetos"
import { Contato } from "@/components/sections/Contato"

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("home")

  return (
    <div className="min-h-svh bg-background">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="mx-auto max-w-[880px]">
        {activeTab === "home" && <Home onTabChange={setActiveTab} />}
        {activeTab === "sobre" && <Sobre />}
        {activeTab === "stack" && <Stack />}
        {activeTab === "projetos" && <Projetos />}
        {activeTab === "contato" && <Contato />}
      </main>
    </div>
  )
}
