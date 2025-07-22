import { SidebarPortal, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/app-sidebar";
import { SiteHeader } from "../_components/site-header";
import { ThemeProvider } from "next-themes";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    /*const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";*/

    return (
            <SidebarProvider className="overflow-none h-screen w-full">
                <AppSidebar />
                <SidebarPortal className="overflow-none scrollbar-track-transparent scrollbar-thumb-accent-foreground">
                    <SiteHeader />
                    <div className="overflow-y-auto scrollbar-thin">
                        {children}
                    </div>
                </SidebarPortal>
            </SidebarProvider>
    );
}
