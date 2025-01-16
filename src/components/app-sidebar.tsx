"use client";

import * as React from "react";




//icons...
import { Users } from 'lucide-react';
import { SquareTerminal } from "lucide-react";
import { UserPlus } from "lucide-react"; 
import { UserRoundCheck } from "lucide-react";
import { FileUser } from "lucide-react";



import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";



import { IoCarSportOutline } from "react-icons/io5";


//components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  IconAddCar,
  IconCarReserved,
  IconCarWeHave,
  IconFixCar,
  IconRouteCar,
  IconWeCar,
} from "../../public/myIcons/Icons";



const roles = {
  admin: ["cars", "employees", "reservations", "reports", "settings"],
  staff: ["cars", "reservations"],
  customer: ["reservations"],
};

const data = {
  user: {
    name: "Ali",
    email: "مبرمج",
    avatar:
      "https://i.ibb.co/gwxLZ4R/DALL-E-2024-11-03-15-45-08-A-high-quality-user-profile-aatar-with-no-background-designed-to-complem.webp",
  },
  navMain: [
    {
      title: "الموظفين",
      url: "#",
      icon: Users,
      isActive: false,
      permission: "employees", // Permission key
      items: [
        {
          title: "إضافة موظف",
          icon: UserPlus,
          url: "#",
        },
        {
          title: "الموظفين الحاليين",
          icon: UserRoundCheck,
          url: "#",
        },
        {
          title: "نشاط الموظف ",
          icon: FileUser,
          url: "#",
        },
      ],
    },
    {
      title: "السيارات",
      url: "",
      icon: IoCarSportOutline,
      isActive: false,
      permission: "cars", // Permission key
      items: [
        {
          title: "السيارات المتوفرة",
          icon: IconWeCar,
          url: "#",
        },
        {
          title: "جميع السيارات الحالية",
          icon: IconCarWeHave,
          url: "#",
        },
        {
          title: "السيارات المحجوزة",
          icon: IconCarReserved,
          url: "#",
        },
        {
          title: "تتبع السيارات",
          icon: IconRouteCar,
          url: "#",
        },
        {
          title: "اضف سيارة",
          icon: IconAddCar,
          url: "/dashboard/cars",
        },
        {
          title: "الصيانة",
          icon: IconFixCar,
          url: "#",
        },
      ],
    },
    {
      title: "الحجوزات",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      permission: "reservations", // Permission key
      items: [
        {
          title: "إدارة الحجوزات",
          url: "#",
        },
        {
          title: "الحجوزات الحالية",
          url: "#",
        },
        {
          title: "إضافة حجز جديد",
          url: "#",
        },
        {
          title: "الحجوزات الملغاة",
          url: "#",
        },
      ],
    },
    {
      title: "التقارير",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      permission: "reports", // Permission key
      items: [
        {
          title: "تقارير الحجوزات",
          url: "#",
        },
        {
          title: "تقارير الصيانة",
          url: "#",
        },
      ],
    },
    {
      title: "الصلاحيات",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      permission: "settings", // Permission key
      items: [
        {
          title: "إدارة الأدوار والصلاحيات",
          url: "#",
        },
      ],
    },
  ],
};

// Filter nav items based on user role
function filterNavItems(navItems: any[], userRole: string) {
  return navItems.filter((item) => roles[userRole]?.includes(item.permission));
}

export function AppSidebar({
  userRole = "admin",
  ...props
}: React.ComponentProps<typeof Sidebar> & { userRole?: string }) {
  const filteredNavMain = filterNavItems(data.navMain, userRole);

  return (
    <Sidebar collapsible="icon" side="right" dir="rtl" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="/logo-alwasam.png" />
                </div>
                <div className="grid flex-1 text-right text-sm leading-tight mx-2">
                  <span className="truncate text-lg font-semibold tracking-tighter bg-gradient-to-br from-[#ff8a00] via-[#e52e71] to-[#882d37] text-transparent bg-clip-text">
                    الوسام
                  </span>
                  <span className="truncate text-md font-semibold tracking-tighter bg-gradient-to-r from-[#ff0099] via-[#d8b043] to-[#d8b043] text-transparent bg-clip-text">
                    لتأجير السيارات
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
            <div className="divider relative mt-4 flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#882d37] to-transparent opacity-80 rounded-md shadow-lg"></div>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredNavMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
