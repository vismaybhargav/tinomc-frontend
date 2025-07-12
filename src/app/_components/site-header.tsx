import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme_toggle";
import { Separator } from "@/components/ui/separator";
import PageTitle from "./page-title";

export function SiteHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                <PageTitle />
                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle /> 
                </div>
            </div>
        </header>
    )
}
