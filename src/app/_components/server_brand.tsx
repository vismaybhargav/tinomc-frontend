import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Gamepad2 } from "lucide-react";

export function ServerBrand() {
    const { isMobile } = useSidebar();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground font-sans"
                >
                <Link href="/" className="flex items-center gap-2">
                        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                            <Gamepad2 className="size-4" />
                        </div>
                        <div className="text-xl font-bold pl-1">
                            TinoMC
                        </div>
                </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )

}
