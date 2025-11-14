"use client"

import { Button } from "@/components/ui/button"
import { FaTelegram } from "react-icons/fa"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">CEFR</span>
            </div>
            <span className="text-xl font-bold">AutoChecker</span>
          </div>
          <Button variant="default" size="lg" className="gap-2">
            <FaTelegram className="h-4 w-4" />
            Login with Telegram
          </Button>
        </div>
      </div>
    </nav>
  )
}

