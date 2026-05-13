"use client"

import { useState, useRef, useCallback } from "react"
import { Nav, type TabId } from "@/components/Nav"
import { Home } from "@/components/sections/Home"
import { Sobre } from "@/components/sections/Sobre"
import { Stack } from "@/components/sections/Stack"
import { Projetos } from "@/components/sections/Projetos"
import { Contato } from "@/components/sections/Contato"

const TAB_ORDER: TabId[] = [
  "home",
  "sobre",
  "stack",
  "projetos",
  "contato",
]

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("home")
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      const deltaY = e.changedTouches[0].clientY - touchStartY.current
      const threshold = 60

      if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > threshold
      ) {
        const currentIndex = TAB_ORDER.indexOf(activeTab)
        if (deltaX < 0 && currentIndex < TAB_ORDER.length - 1) {
          setActiveTab(TAB_ORDER[currentIndex + 1])
        } else if (deltaX > 0 && currentIndex > 0) {
          setActiveTab(TAB_ORDER[currentIndex - 1])
        }
      }
    },
    [activeTab],
  )

  return (
    <div className="min-h-svh bg-background">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main
        className="mx-auto max-w-[880px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {activeTab === "home" && <Home onTabChange={setActiveTab} />}
        {activeTab === "sobre" && <Sobre />}
        {activeTab === "stack" && <Stack />}
        {activeTab === "projetos" && <Projetos />}
        {activeTab === "contato" && <Contato />}
      </main>
    </div>
  )
}
