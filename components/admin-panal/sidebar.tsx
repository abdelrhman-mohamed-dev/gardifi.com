import Link from "next/link";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panal/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "@/components/admin-panal/sidebar-toggle";
import Image from "next/image";

export function Sidebar() {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <aside
            className={cn(
                "fixed top-0 bg-neutral-100 dark:bg-slate-900 right-0 text-black dark:text-white z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 max-sm:hidden",
                sidebar?.isOpen === false ? "w-[90px]" : "w-72"
            )}
        >
            <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
            <div className="relative h-full flex flex-col px-3 py-2 overflow-y-auto shadow-md ">
                <Button
                    className={cn(
                        "transition-transform !no-underline ease-in-out duration-300 mb-1",
                        sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
                    )}
                    variant="link"
                    asChild
                >
                    <Link href="/dashboard" className="flex justify-between items-center gap-2 ">
                        <Image className="hidden dark:block" src="/assets/imgs/dark-logo.png" width={50} height={50} alt="Logo" />
                        <Image className="dark:hidden" src="/assets/imgs/white-logo.png" width={50} height={50} alt="Logo" />
                        <h1
                            className={cn(
                                " font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                                sidebar?.isOpen === false
                                    ? "-translate-x-96 opacity-0 hidden"
                                    : "translate-x-0 opacity-100"
                            )}
                        >
                            Gardify
                        </h1>
                    </Link>
                </Button>
                <Menu isOpen={sidebar?.isOpen} />
            </div>
        </aside>
    );
}
