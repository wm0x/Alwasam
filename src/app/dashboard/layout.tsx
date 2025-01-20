import { AppSidebar } from "@/components/app-sidebar";
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
      </SidebarProvider>
    </div>
  );
}
