"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import React from "react";
import { NavMain } from "./nav_main";
import { LucideIcon, Settings } from "lucide-react";
import { NavUser } from "./nav_user";
import { ServerBrand } from "./server_brand";

export interface User {
    name: string,
    email: string,
    avatar: string
}

interface NavSubSection {
    title: string,
    url: string
}

interface NavSection {
    title: string,
    url: string,
    icon: LucideIcon,
    isActive: boolean,
    items: NavSubSection[]
}

interface NavData {
    user: User,
    navMain: NavSection[],
}

const data: NavData = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg"
    },
    navMain: [
        {
            title: "Server Settings",
            url: "#",
            icon: Settings,
            isActive: true,
            items: [
                {
                    title: "Environment Variables",
                    url: "env-vars"
                }
            ]
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <ServerBrand /> 
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )

}

