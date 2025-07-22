import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useState } from "react";

export default function NavServerStatus() {
    let [isServerOn, setServerOn] = useState(true);

    // useEffect(() => {

    // });

    return (
        <SidebarMenu>
            <SidebarMenuItem className={`group ${isServerOn ? "bg-green-900" : "bg-red-900"} py-2 rounded-sm group-data-[collapsible=icon]:rounded-full`}>
                <div className="flex justify-between mx-2 items-center text-sm">

                    <span className="group-data-[collapsible=icon]:hidden">Server Status</span>

                    <span className="relative size-3 align-center group-data-[collapsible=icon]:mx-auto">
                        {isServerOn && <span className="absolute inline-flex h-full w-full rounded-full animate-ping bg-green-500 opacity-75"></span>}
                        <span className={`absolute inline-flex size-3 rounded-full ${isServerOn ? "bg-green-500" : "bg-red-900 border-2 border-red-500"}`}></span>
                    </span>

                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
