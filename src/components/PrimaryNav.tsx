"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function PrimaryNav({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarMenu dir="rtl">
      <SidebarGroupLabel className="text-xs text-pretty mx-2" dir="rtl">
        الرئيسيه
      </SidebarGroupLabel>
      {items.map((item) => (
        <SidebarMenuItem key={item.title} className="px-2">
          <SidebarMenuButton
            asChild
            isActive={item.isActive}
            className="text-lg"
          >
            <a href={item.url}>
              <item.icon className="text-[#882D37]" />
              <span className="text-center mt-1">{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
