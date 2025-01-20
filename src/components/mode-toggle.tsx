"use client"

import * as React from "react"
import { Moon, Sun , MonitorCog} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild dir="ltr" className="w-full hover:bg-black/20 dark:hover:bg-white/20">
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">الوضع</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="dark:bg-white dark:text-black bg-black text-white">
        <DropdownMenuItem onClick={() => setTheme("light")} dir="rtl" className="flex justify-between">
          الوضع الفاتح
          <Sun/>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} dir="rtl" className="flex justify-between">
          الوضع الداكن
          <Moon/>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} dir="rtl" className="flex justify-between">
          النظام
          <MonitorCog/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
