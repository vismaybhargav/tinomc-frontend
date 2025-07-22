"use client";

import { usePathname } from "next/navigation";

const PAGE_TITLE_LOOKUP: Record<string, string> = {
    "/": "Home",
    "/settings": "Settings",
    "/about": "About",
    "/env-vars": "Environment Variables",
}

export default function PageTitle(){
    const route = usePathname();

    return (
        <h1 className="text-lg font-semibold">
            {PAGE_TITLE_LOOKUP[route] || "TinoMC"}
        </h1>
    );
}
