"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Sidebar } from "@/components/admin-panal/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function AdminPanelLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "transition-[margin-right] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:mr-[90px]" : "lg:mr-72"
                )}
            >
                {children}
            </main>
            <footer
                className={cn(
                    "transition-[margin-right] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
            </footer>
        </>
    );
}
