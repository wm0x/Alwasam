import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/** this is for sidebar toggle to change size of sidebar */}
          <SidebarTrigger className="-ml-1 mt-2" />
          {children}
        </SidebarInset>
        <div className="relative">
          <div className="absolute bottom-4 left-4">
            <ModeToggle />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
