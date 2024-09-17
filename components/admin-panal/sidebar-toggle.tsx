import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
    isOpen: boolean | undefined;
    setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
    return (
        <div className="invisible bg-neutral-100 dark:bg-slate-900 lg:visible absolute top-[12px] -left-[16px] z-20">
            <Button
                onClick={() => setIsOpen?.()}
                className="rounded-md w-8 h-8 dark:hover:bg-slate-800 hover:bg-neutral-200 "
                variant="outline"
                size="icon"
            >
                <ChevronLeft
                    className={cn(
                        "h-4 w-4 transition-transform ease-in-out duration-700",
                        isOpen === false ? "rotate-0" : "rotate-180"
                    )}
                />
            </Button>
        </div >
    );
}
